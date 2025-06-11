const asyncHandler = require("express-async-handler");
const ServiceCategory = require("../models/ServiceCatModel");

// Criar nova categoria
const createServiceCategory = asyncHandler(async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  try {
    const alreadyExists = await ServiceCategory.findOne({ where: { title } });

    if (alreadyExists) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const newCategory = await ServiceCategory.create({ title });
    return res.status(201).json(newCategory);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Error creating category: " + error.message });
  }
});

// Listar todas as categorias
const getAllCategory = asyncHandler(async (req, res) => {
  try {
    const allCategory = await ServiceCategory.findAll({ order: [["createdAt", "DESC"]] });
    return res.status(200).json({ allCategory });
  } catch (error) {
    return res.status(400).json({ error: "Error fetching categories: " + error.message });
  }
});

// Buscar uma categoria por ID
const getOneServiceCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const category = await ServiceCategory.findByPk(id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    return res.status(200).json(category);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Error fetching category: " + error.message });
  }
});

// Atualizar uma categoria
const updateCategoryService = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const category = await ServiceCategory.findByPk(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    await category.update(req.body);
    return res.status(200).json(category);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Error updating category: " + error.message });
  }
});

// Deletar uma categoria
const deleteCategoryService = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const category = await ServiceCategory.findByPk(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    await category.destroy();
    return res.status(200).json({
      message: "Category removed successfully",
      category,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Error deleting category: " + error.message });
  }
});

module.exports = {
  createServiceCategory,
  getAllCategory,
  getOneServiceCategory,
  updateCategoryService,
  deleteCategoryService,
};

