const uniqid = require("uniqid");
const asyncHandler = require("express-async-handler");
const validateId = require("../utils/validateRegisterId");
const User = require('../models').User;
const Product = require('../models').Product;
const Cart = require('../models').Cart;
const Coupon = require('../models').Coupon;
const Order = require('../models').Order;


const getWishlist = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const user = await User.findByPk(userId, {
    include: [{
      model: Wishlist,
      as: "wishlist",
    }],
  });
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }
  res.json({ wishlist: user.wishlist });
});

const emptyCart = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  validateId(userId);

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    const cart = await Cart.destroy({
      where: {
        orderby: user.id, 
      },
    });
    res.json({ message: "Carrinho esvaziado", removed: cart });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const applyCoupon = asyncHandler(async (req, res) => {
  const { coupon } = req.body;
  const userId = req.user.id;
  validateId(userId);

  const validCoupon = await Coupon.findOne({ where: { name: coupon } });
  if (!validCoupon) {
    return res.status(400).json({ message: "Cupom inválido" });
  }
  const user = await User.findByPk(userId);
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }
  const cart = await Cart.findOne({
    where: { orderby: user.id },
    include: [{
      model: Product,
      as: "products",
    }],
  });
  if (!cart) {
    return res.status(404).json({ message: "Carrinho não encontrado" });
  }
  const cartTotal = cart.cartTotal;
  const totalAfterDiscount = parseFloat(
    (cartTotal - (cartTotal * validCoupon.discount) / 100).toFixed(2)
  );

  await Cart.update(
    { totalAfterDiscount },
    { where: { orderby: user.id } }
  );
  res.json({ totalAfterDiscount });
});

const createOrder = asyncHandler(async (req, res) => {
  const { COD, couponApplied } = req.body;
  const userId = req.user.id;
  validateId(userId);

  try {
    if (!COD) {
      throw new Error("Create cash order failed");
    }
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    const userCart = await Cart.findOne({
      where: { orderby: user.id },
      include: [{
        model: Product,
        as: "products",
        through: { attributes: ["count"] },
      }],
    });

    if (!userCart) {
      return res.status(404).json({ message: "Carrinho não encontrado" });
    }

    const finalAmount = couponApplied && userCart.totalAfterDiscount
      ? userCart.totalAfterDiscount
      : userCart.cartTotal;

    const newOrder = await Order.create({
      orderby: user.id,
      orderStatus: "Cash on Delivery",
      paymentIntent: {
        id: uniqid(),
        method: "COD",
        amount: finalAmount,
        status: "Cash on Delivery",
        created: new Date(),
        currency: "usd",
      },
    }, {
      include: [{
        association: Order.associations.products, 
      }]
    });

    if (userCart.products && userCart.products.length) {
      const orderProductsData = userCart.products.map((product) => ({
        OrderId: newOrder.id,
        ProductId: product.id,
        count: product.CartProduct.count,
      }));
      await OrderProducts.bulkCreate(orderProductsData);
    }

    const updates = userCart.products.map((product) => {
      return Product.update(
        {
          quantity: Sequelize.literal(`quantity - ${product.CartProduct.count}`),
          sold: Sequelize.literal(`sold + ${product.CartProduct.count}`),
        },
        { where: { id: product.id } }
      );
    });

    await Promise.all(updates);
    res.json({ message: "Pedido criado com sucesso" });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const getAllOrders = asyncHandler(async (req, res) => {
  try {
    const allUserOrders = await Order.findAll({
      include: [
        {
          model: Product,
          as: "products",
          through: { attributes: ["count"] },
        },
        {
          model: User,
          as: "orderby",
          attributes: ["id", "firstname", "lastname", "email"],
        },
      ],
    });

    res.json(allUserOrders);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const getOrderByUserId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateId(id);
  try {
    const userOrders = await Order.findOne({
      where: { orderby: id },
      include: [
        {
          model: Product,
          as: "products",
          through: { attributes: ["count"] },
        },
        {
          model: User,
          as: "orderby",
          attributes: ["id", "firstname", "lastname", "email"],
        },
      ],
    });

    if (!userOrders) {
      return res.status(404).json({ message: "Pedido não encontrado para o usuário" });
    }
    res.json(userOrders);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  validateId(id);
  try {
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }
    order.orderStatus = status;
    let paymentIntent = order.paymentIntent || {};
    paymentIntent.status = status;
    order.paymentIntent = paymentIntent;
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const userCart = asyncHandler(async (req, res) => {
  const { cart } = req.body;
  const { id } = req.user;
  validateId(id);

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    const alreadyExistCart = await Cart.findOne({ where: { orderby: id } });
    if (alreadyExistCart) {
      await alreadyExistCart.destroy();
    }
    const products = [];
    for (const item of cart) {
      const product = await Product.findByPk(item.id, { attributes: ['price'] });
      if (!product) {
        return res.status(404).json({ message: `Produto com id ${item.id} não encontrado` });
      }
      products.push({
        productId: item.id,
        count: item.count,
        color: item.color,
        price: product.price,
      });
    }

    const cartTotal = products.reduce((acc, curr) => acc + curr.price * curr.count, 0);
    const newCart = await Cart.create(
      {
        orderby: id,
        cartTotal,
        products,
      },
      {
        include: [{ model: Product, as: 'products' }],
      }
    );
    res.json(newCart);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const getUserCart = asyncHandler(async (req, res) => {
  const { id } = req.user;
  validateId(id);
  try {
    const cart = await Cart.findOne({
      where: { orderby: id },
      include: [
        {
          model: Product,
          as: 'products',
          through: { attributes: ['count', 'color', 'price'] },
        },
      ],
    });

    if (!cart) {
      return res.status(404).json({ message: "Carrinho não encontrado" });
    }
    res.json(cart);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  getWishlist,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  updateOrderStatus,
  getAllOrders,
  getOrderByUserId,
};