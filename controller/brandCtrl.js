const asyncHandler = require("express-async-handler");
const fs = require("fs");
const { cloudinaryUploadImg } = require("../utils/cloudinary");
const { Brand } = require('../models');

const createBrand = asyncHandler(async (req, res) => {
  try {
    const { title } = req.body;
    const imageUrls = req.uploadedImages || [];
    const newBrand = await Brand.create({ title, images: imageUrls });
    res.status(201).json(newBrand);
  } catch (error) {
    throw new Error(error.message);
  }
});

const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    await Brand.update(req.body, { where: { id } });
    const updatedBrand = await Brand.findByPk(id);
    if (!updatedBrand) return res.status(404).json({ message: "Marca não encontrada." });
    res.status(200).json(updatedBrand);
  } catch (error) {
    throw new Error(error.message);
  }
});

const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Brand.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: "Marca não encontrada." });
    res.status(200).json({ message: "Marca excluída com sucesso." });
  } catch (error) {
    throw new Error(error.message);
  }
});

const getBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const brand = await Brand.findByPk(id);
    if (!brand) return res.status(404).json({ message: "Marca não encontrada." });
    res.status(200).json(brand);
  } catch (error) {
    throw new Error(error.message);
  }
});

const getallBrand = asyncHandler(async (req, res) => {
  try {
    const brands = await Brand.findAll();
    res.status(200).json(brands);
  } catch (error) {
    throw new Error(error.message);
  }
});

const uploadImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const brand = await Brand.findByPk(id);
    if (!brand) {
      return res.status(404).json({ message: "Marca não encontrada."});
    }

    const urls = req.uploadedImages || [];
    const existingImages = brand.images || [];
    const updatedImages = existingImages.concat(urls);

    await brand.update({ images: updatedImages });

    const updatedBrand = await Brand.findByPk(id);
    res.status(200).json(updatedBrand);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getallBrand,
  uploadImages,
};

