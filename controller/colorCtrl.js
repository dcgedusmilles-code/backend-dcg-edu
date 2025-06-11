const asyncHandler = require("express-async-handler");
const Color = require("../models/colorModel");

// Criar nova cor
const createColor = asyncHandler(async (req, res) => {
  try {
    const newColor = await Color.create(req.body);
    res.status(201).json(newColor);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Atualizar cor
const updateColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    await Color.update(req.body, { where: { id } });
    const updatedColor = await Color.findByPk(id);
    if (!updatedColor) {
      return res.status(404).json({ message: "Cor não encontrada." });
    }
    res.status(200).json(updatedColor);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Deletar cor
const deleteColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Color.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ message: "Cor não encontrada." });
    }
    res.status(200).json({ message: "Cor deletada com sucesso." });
  } catch (error) {
    throw new Error(error.message);
  }
});

// Obter uma cor por ID
const getColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const color = await Color.findByPk(id);
    if (!color) {
      return res.status(404).json({ message: "Cor não encontrada." });
    }
    res.status(200).json(color);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Obter todas as cores
const getallColor = asyncHandler(async (req, res) => {
  try {
    const colors = await Color.findAll();
    res.status(200).json(colors);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = {
  createColor,
  updateColor,
  deleteColor,
  getColor,
  getallColor,
};

