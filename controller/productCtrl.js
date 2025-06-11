

const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const { Product, User } = require("../models"); // ajuste conforme seu caminho
const { validateId } = require("../utils/validateId");
const { Op } = require("sequelize");

// Criar Produto
const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    throw new Error(error.message || "Erro ao criar produto");
  }
});

// Atualizar Produto
const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateId(id);
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    await product.update(req.body);
    res.json(product);
  } catch (error) {
    throw new Error(error.message || "Erro ao atualizar produto");
  }
});

// Deletar Produto
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateId(id);
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    await product.destroy();
    res.json({ message: "Produto deletado com sucesso" });
  } catch (error) {
    throw new Error(error.message || "Erro ao deletar produto");
  }
});

// Obter Produto por ID
const getaProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateId(id);
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
    res.json(product);
  } catch (error) {
    throw new Error(error.message || "Erro ao buscar produto");
  }
});


// GET ALL PRODUCTS COM FILTROS E PAGINAÇÃO
const getAllProduct = asyncHandler(async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      sort = "-createdAt",
      fields,
      ...filters
    } = req.query;

    // Filtros com operadores (gt, gte, lt, lte)
    const where = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (/\b(gt|gte|lt|lte)\b/.test(value)) {
        const match = value.match(/(gt|gte|lt|lte)/)[0];
        const opMap = { gt: Op.gt, gte: Op.gte, lt: Op.lt, lte: Op.lte };
        where[key] = { [opMap[match]]: Number(value.replace(/[^\d]/g, "")) };
      } else {
        where[key] = value;
      }
    });

    // Ordenação
    let order = [["createdAt", "DESC"]];
    if (sort) {
      order = sort.split(",").map((field) => {
        const direction = field.startsWith("-") ? "DESC" : "ASC";
        const column = field.replace("-", "");
        return [column, direction];
      });
    }

    // Seleção de campos
    const attributes = fields ? fields.split(",") : { exclude: ["__v"] };

    // Paginação
    const offset = (page - 1) * limit;

    const { count, rows } = await Product.findAndCountAll({
      where,
      attributes,
      order,
      limit: parseInt(limit),
      offset: parseInt(offset),
    });

    if (offset >= count) {
      throw new Error("Esta página não existe");
    }

    res.json({
      total: count,
      page: parseInt(page),
      limit: parseInt(limit),
      data: rows,
    });
  } catch (error) {
    throw new Error(error.message || "Erro ao buscar produtos");
  }
});

// ADICIONAR OU REMOVER PRODUTO DA WISHLIST
const addToWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user; // assumindo que o ID do usuário vem do middleware de autenticação
  const { prodId } = req.body;

  try {
    const user = await User.findByPk(_id, {
      include: [{ model: Product, as: "wishlist" }],
    });

    if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

    const alreadyInWishlist = user.wishlist.some(
      (product) => product.id.toString() === prodId.toString()
    );

    if (alreadyInWishlist) {
      await user.removeWishlist(prodId); // Sequelize magic method
    } else {
      await user.addWishlist(prodId); // Sequelize magic method
    }

    const updatedUser = await User.findByPk(_id, {
      include: [{ model: Product, as: "wishlist" }],
    });

    res.json(updatedUser);
  } catch (error) {
    throw new Error(error.message || "Erro ao atualizar wishlist");
  }
});


const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user; // usuário autenticado
  const { star, prodId, comment } = req.body;

  try {
    const product = await Product.findByPk(prodId);
    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    // Verificar se o usuário já avaliou este produto
    const existingRating = await Rating.findOne({
      where: {
        productId: prodId,
        userId: _id,
      },
    });

    if (existingRating) {
      // Atualizar avaliação existente
      await existingRating.update({ star, comment });
    } else {
      // Criar nova avaliação
      await Rating.create({
        star,
        comment,
        productId: prodId,
        userId: _id,
      });
    }

    // Recalcular média de avaliação
    const allRatings = await Rating.findAll({
      where: { productId: prodId },
    });

    const totalRating = allRatings.length;
    const ratingSum = allRatings.reduce((sum, r) => sum + r.star, 0);
    const averageRating = Math.round(ratingSum / totalRating);

    // Atualizar totalrating no produto
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
    throw new Error(error.message || "Erro ao avaliar produto");
  }
});


module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getaProduct,
  getAllProduct,
  addToWishlist,
  rating
};
