const asyncHandler = require("express-async-handler");
const { CategoryPortfolio } = require('../models');

const createCategoryPortfolio = asyncHandler(async (req, res) => {
  try {
    const newCategoryPortfolio = await CategoryPortfolio.create(req.body);
    res.status(201).json(newCategoryPortfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const updateCategoryPortfolio = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const categoryPortfolio = await CategoryPortfolio.findByPk(id);
    if (!categoryPortfolio) return res.status(404).json({ message: "Categoria de Portfólio não encontrada." });
    await categoryPortfolio.update(req.body);
    res.json(categoryPortfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const deleteCategoryPortfolio = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const categoryPortfolio = await CategoryPortfolio.findByPk(id);
    if (!categoryPortfolio) return res.status(404).json({ message: "Categoria de Portfólio não encontrada." });
    await categoryPortfolio.destroy();
    res.json({ message: "Categoria de Portfólio deletada com sucesso." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const getCategoryPortfolio = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const categoryPortfolio = await CategoryPortfolio.findByPk(id);
    if (!categoryPortfolio) return res.status(404).json({ message: "Categoria de Portfólio não encontrada." });
    res.json(categoryPortfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const getAllCategoryPortfolios = asyncHandler(async (req, res) => {
  try {
    const categories = await CategoryPortfolio.findAll({ order: [["createdAt", "DESC"]] });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = {
  createCategoryPortfolio,
  updateCategoryPortfolio,
  deleteCategoryPortfolio,
  getCategoryPortfolio,
  getAllCategoryPortfolios,
}; 