const { Op } = require("sequelize");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const Product = require('../models').Product;
const User = require('../models').User;
const Rating = require('../models').Rating;
const ProductCategory = require('../models').ProductCategory;

const createProduct = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.description) {
    return res.status(400).json({ message: "Título e descrição são obrigatórios." });
  }
    const imageUrls = req.uploadedImages || [];
    const newcategoryProduct = await Product.create({
      title: req.body.title,
      description: req.body.description,
      categoryId: req.body.category,
      price: req.body.price,
      quantity: req.body.quantity,
      slug: req.body.slug,
      images: imageUrls,
    });

    const newProduct = await Product.findByPk(newcategoryProduct.id, {
      include: [{ model: ProductCategory, as: 'categoryProduct' }],
    });
    res.status(201).json(newProduct);
});

const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: "Produto não encontrado" });
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    await product.update(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message || "Erro ao atualizar produto" });
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: "Produto não encontrado" });
    await product.destroy();
    res.json({ message: "Produto deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: error.message || "Erro ao deletar produto" });
  }
});

const getaProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: "Produto não encontrado" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message || "Erro ao buscar produto" });
  }
});

const getAllProduct = asyncHandler(async (req, res) => {
  try {
    let { page = 1, limit = 10, sort = "-createdAt", fields, ...filters } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    const offset = (page - 1) * limit;
    const where = {};
    const opMap = { gt: Op.gt, gte: Op.gte, lt: Op.lt, lte: Op.lte };
    for (const [key, value] of Object.entries(filters)) {
      const match = value.match(/(gt|gte|lt|lte):(.+)/);
      if (match) {
        const [, op, val] = match;
        where[key] = { [opMap[op]]: isNaN(val) ? val : Number(val) };
      } else {
        where[key] = value;
      }
    }
    const order = sort.split(",").map((field) => {
      const direction = field.startsWith("-") ? "DESC" : "ASC";
      return [field.replace("-", ""), direction];
    });

    const attributes = fields ? fields.split(",") : undefined;

    const { count, rows } = await Product.findAndCountAll({
      where,
      attributes,
      order,
      limit,
      offset,
      include: [
        {
          model: ProductCategory,
          as: "categoryProduct", 
          attributes: ["id", "title"],
        },
      ],
    });

    if (offset >= count && count !== 0) {
      return res.status(404).json({ message: "Esta página não existe" });
    }

    res.json({
      total: count,
      page,
      limit,
      data: rows,
    });
  } catch (error) {
    res.status(500).json({ message: error.message || "Erro ao buscar produtos" });
  }
});

const addToWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { prodId } = req.body;

  try {
    const user = await User.findByPk(_id, {
      include: [{ model: Product, as: "wishlist" }],
    });

    if (!user) return res.status(404).json({ message: "Usuário não encontrado" });
    const isInWishlist = user.wishlist.some((p) => p.id === Number(prodId));
    if (isInWishlist) {
      await user.removeWishlist(prodId);
    } else {
      await user.addWishlist(prodId);
    }
    const updatedUser = await User.findByPk(_id, {
      include: [{ model: Product, as: "wishlist" }],
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message || "Erro ao atualizar wishlist" });
  }
});

const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, prodId, comment } = req.body;

  try {
    const product = await Product.findByPk(prodId);
    if (!product) return res.status(404).json({ message: "Produto não encontrado" });

    const existingRating = await Rating.findOne({
      where: { productId: prodId, userId: _id },
    });

    if (existingRating) {
      await existingRating.update({ star, comment });
    } else {
      await Rating.create({ star, comment, productId: prodId, userId: _id });
    }

    const allRatings = await Rating.findAll({ where: { productId: prodId } });
    const totalRating = allRatings.length;
    const ratingSum = allRatings.reduce((sum, r) => sum + r.star, 0);
    const averageRating = Math.round(ratingSum / totalRating);
    await product.update({ totalrating: averageRating });
    const updatedProduct = await Product.findByPk(prodId, {
      include: [
        {
          model: Rating,
          include: [{ model: User, attributes: ["id", "name"] }],
        },
      ],
    });

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message || "Erro ao avaliar produto" });
  }
});

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getaProduct,
  getAllProduct,
  addToWishlist,
  rating,
};
