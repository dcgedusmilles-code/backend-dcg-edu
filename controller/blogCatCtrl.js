const asyncHandler = require("express-async-handler");
const BlogCategory = require("../models/blogCategoryModel");

// Criar nova categoria
const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await BlogCategory.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Atualizar categoria
const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const category = await BlogCategory.findByPk(id);
    if (!category) return res.status(404).json({ message: "Categoria não encontrada." });

    await category.update(req.body);
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Deletar categoria
const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const category = await BlogCategory.findByPk(id);
    if (!category) return res.status(404).json({ message: "Categoria não encontrada." });

    await category.destroy();
    res.json({ message: "Categoria deletada com sucesso." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obter uma categoria por ID
const getCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const category = await BlogCategory.findByPk(id);
    if (!category) return res.status(404).json({ message: "Categoria não encontrada." });

    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obter todas as categorias
const getallCategory = asyncHandler(async (req, res) => {
  try {
    const categories = await BlogCategory.findAll({ order: [["createdAt", "DESC"]] });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getallCategory,
};

