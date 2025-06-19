const asyncHandler = require("express-async-handler");
const ProductCategory = require('../models').ProductCategory;

const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await ProductCategory.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    throw new Error(error.message);
  }
});

const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const category = await ProductCategory.findByPk(id);
    if (!category) {
      return res.status(404).json({ message: "Categoria não encontrada" });
    }
    await category.update(req.body);
    res.json(category);
  } catch (error) {
    throw new Error(error.message);
  }
});

const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const category = await ProductCategory.findByPk(id);
    if (!category) {
      return res.status(404).json({ message: "Categoria não encontrada" });
    }
    await category.destroy();
    res.json({ message: "Categoria deletada com sucesso" });
  } catch (error) {
    throw new Error(error.message);
  }
});

const getCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const category = await ProductCategory.findByPk(id);
    if (!category) {
      return res.status(404).json({ message: "Categoria não encontrada" });
    }
    res.json(category);
  } catch (error) {
    throw new Error(error.message);
  }
});

const getallCategory = asyncHandler(async (req, res) => {
  try {
    const categories = await ProductCategory.findAll();
    res.json(categories);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getallCategory,
};

