
const uniqid = require("uniqid");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Product = require("../models/productModel");
const Cart = require("../models/cartModel");
const Coupon = require("../models/couponModel");
const Order = require("../models/orderModel");
const validateId = require("../utils/validateRegisterId");


const getWishlist = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const user = await User.findByPk(userId, {
    include: [{
      model: Wishlist,   // modelo da tabela associada (ex: Wishlist)
      as: "wishlist",    // alias conforme associação definida no modelo User
    }],
  });

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  res.json({ wishlist: user.wishlist });
});

const emptyCart = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  validateId(userId);

  try {
    // Busca o usuário pelo PK (id)
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Remove o carrinho associado ao usuário
    // Supondo que no modelo Cart você tenha o campo orderby como FK para User id
    const cart = await Cart.destroy({
      where: {
        orderby: user.id,  // user.id é o campo PK
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
  const userId = req.user._id;
  validateId(userId);

  // Busca o cupom válido
  const validCoupon = await Coupon.findOne({ where: { name: coupon } });
  if (!validCoupon) {
    return res.status(400).json({ message: "Cupom inválido" });
  }

  // Busca o usuário
  const user = await User.findByPk(userId);
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  // Busca o carrinho do usuário incluindo os produtos (associação)
  const cart = await Cart.findOne({
    where: { orderby: user.id },
    include: [{
      model: Product,
      as: "products",  // Certifique-se do alias correto na associação Cart-Product
    }],
  });

  if (!cart) {
    return res.status(404).json({ message: "Carrinho não encontrado" });
  }

  // Calcula o total com desconto
  const cartTotal = cart.cartTotal;
  const totalAfterDiscount = parseFloat(
    (cartTotal - (cartTotal * validCoupon.discount) / 100).toFixed(2)
  );

  // Atualiza o carrinho com o total com desconto
  await Cart.update(
    { totalAfterDiscount },
    { where: { orderby: user.id } }
  );

  res.json({ totalAfterDiscount });
});

const createOrder = asyncHandler(async (req, res) => {
  const { COD, couponApplied } = req.body;
  const userId = req.user._id;
  validateId(userId);

  try {
    if (!COD) {
      throw new Error("Create cash order failed");
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Buscar o carrinho do usuário, incluindo os produtos
    const userCart = await Cart.findOne({
      where: { orderby: user.id },
      include: [{
        model: Product,
        as: "products",
        through: { attributes: ["count"] }, // Se a relação for Many-to-Many com quantidade
      }],
    });

    if (!userCart) {
      return res.status(404).json({ message: "Carrinho não encontrado" });
    }

    // Calcular valor final
    const finalAmount = couponApplied && userCart.totalAfterDiscount
      ? userCart.totalAfterDiscount
      : userCart.cartTotal;

    // Criar order
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
        association: Order.associations.products, // ajuste conforme seu setup
      }]
    });

    // Assumindo que você precise criar relação de produtos no pedido, faça assim:
    // (Se usar tabela intermediária OrderProducts com count)
    if (userCart.products && userCart.products.length) {
      const orderProductsData = userCart.products.map((product) => ({
        OrderId: newOrder.id,
        ProductId: product.id,
        count: product.CartProduct.count, // nome do join table pode variar
      }));

      // Inserir no join table OrderProducts (exemplo)
      await OrderProducts.bulkCreate(orderProductsData);
    }

    // Atualizar estoque dos produtos
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
          through: { attributes: ["count"] }, // ou o campo da tabela join que representa quantidade
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
    // Busca o pedido pelo ID
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }

    // Atualiza os campos orderStatus e paymentIntent.status
    order.orderStatus = status;

    // Supondo que paymentIntent é um JSON armazenado como STRING/TEXT no MySQL
    let paymentIntent = order.paymentIntent || {};
    paymentIntent.status = status;

    // Se paymentIntent for um campo JSON ou string JSON, ajuste conforme o seu model
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
    // Buscar usuário
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Verificar se já existe um carrinho para o usuário e deletar
    const alreadyExistCart = await Cart.findOne({ where: { orderby: id } });
    if (alreadyExistCart) {
      await alreadyExistCart.destroy();
    }

    // Construir array de produtos para inserir no carrinho
    const products = [];
    for (const item of cart) {
      // Buscar preço do produto
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

    // Calcular total do carrinho
    const cartTotal = products.reduce((acc, curr) => acc + curr.price * curr.count, 0);

    // Criar novo carrinho
    // Supondo que Cart tenha relacionamento hasMany com CartItem ou similar para armazenar produtos
    const newCart = await Cart.create(
      {
        orderby: id,
        cartTotal,
        products, // Se Cart e Product estão associados por tabela intermediária, isso deve ser feito via associação
      },
      {
        include: [{ model: Product, as: 'products' }], // Ajuste conforme seu model de associação
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
    // Buscar carrinho do usuário com os produtos associados
    const cart = await Cart.findOne({
      where: { orderby: id },
      include: [
        {
          model: Product,
          as: 'products',
          through: { attributes: ['count', 'color', 'price'] }, // Dados extras da associação
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