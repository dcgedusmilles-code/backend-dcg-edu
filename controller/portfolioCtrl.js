const asyncHandler = require("express-async-handler");
const sequelize = require("../config/dbConnect");
const { Portfolio, CategoryPortfolio } = require('../models');

const createPortfolio = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.description) {
    return res.status(400).json({ message: "Título e descrição são obrigatórios." });
  }
  const imageUrls = req.uploadedImages || [];
  const newPortfolio = await Portfolio.create({
    title: req.body.title,
    description: req.body.description,
    categoryId: req.body.categoryId,
    author: req.body.author,
    images: imageUrls,
  });

  const populatedPortfolio = await Portfolio.findByPk(newPortfolio.id, {
    include: [{ model: CategoryPortfolio, as: 'categoryPortfolio' }],
  });
  res.status(201).json(populatedPortfolio);
});

const updatePortfolio = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const portfolio = await Portfolio.findByPk(id);
  if (!portfolio) {
    return res.status(404).json({ message: "Portfólio não encontrado." });
  }
  const dataToUpdate = { ...req.body };
  let finalImages = [];
  if (dataToUpdate.images) {
    let receivedImages = dataToUpdate.images;
    while (typeof receivedImages === 'string' && receivedImages.startsWith('[') && receivedImages.endsWith(']')) {
      try {
        const tempParsed = JSON.parse(receivedImages);
        if (typeof tempParsed === 'string') {
          receivedImages = tempParsed;
        } else {
          receivedImages = tempParsed;
          break;
        }
      } catch (e) {
        console.error("Erro ao parsear JSON aninhado para imagens do req.body:", e);
        receivedImages = [];
        break;
      }
    }

    if (Array.isArray(receivedImages)) {
      finalImages = receivedImages;
    } else {    
      let dbImages = portfolio.images;
      if (typeof dbImages === 'string') {
        try { dbImages = JSON.parse(dbImages); } catch (e) { dbImages = []; }
      }
      if (Array.isArray(dbImages)) {
        finalImages = dbImages;
      } else {
        finalImages = [];
      }
    }
  } else {
    let dbImages = portfolio.images;
    if (typeof dbImages === 'string') {
      try { dbImages = JSON.parse(dbImages); } catch (e) { dbImages = []; }
    }
    if (Array.isArray(dbImages)) {
      finalImages = dbImages;
    } else {
      finalImages = []; 
    }
  }

  if (req.uploadedImages && req.uploadedImages.length > 0) {
    finalImages = finalImages.concat(req.uploadedImages);
  }

  const uniqueImageUrls = new Set();
  const uniqueImages = [];
  for (const img of finalImages) {
    if (img.url && !uniqueImageUrls.has(img.url)) {
      uniqueImageUrls.add(img.url);
      uniqueImages.push(img);
    }
  }
  finalImages = uniqueImages;
  dataToUpdate.images = finalImages;

  if (dataToUpdate.category && !dataToUpdate.categoryId) {
    dataToUpdate.categoryId = dataToUpdate.category;
    delete dataToUpdate.category;
  }
  await portfolio.update(dataToUpdate);
  const updatedPortfolio = await Portfolio.findByPk(id, {
    include: [{ model: CategoryPortfolio, as: 'categoryPortfolio' }],
  });
  res.json(updatedPortfolio);
});

const getPortfolio = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const portfolio = await Portfolio.findByPk(id);
  if (!portfolio) return res.status(404).json({ message: "Portfólio não encontrado." });
  await portfolio.increment("numViews");
  res.json(portfolio);
});

const getAllPortfolios = asyncHandler(async (req, res) => {
  const portfolios = await Portfolio.findAll({
    include: [{ model: CategoryPortfolio, as: 'categoryPortfolio' }],
    order: [["createdAt", "DESC"]],
  });
  res.json(portfolios);
});

const deletePortfolio = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deleted = await Portfolio.destroy({ where: { id } });
  if (!deleted) return res.status(404).json({ message: "Portfólio não encontrado." });
  res.json({ message: "Portfólio deletado com sucesso." });
});

const uploadImagesPortfolio = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const portfolio = await Portfolio.findByPk(id);
  if (!portfolio) return res.status(404).json({ message: "Portfólio não encontrado." });
  const urls = req.uploadedImages || [];
  const existingImages = portfolio.images || [];
  const updatedImages = existingImages.concat(urls);
  const dataToUpdate = {
    ...req.body,
    images: updatedImages,
  };
  await portfolio.update(dataToUpdate);
  res.json(await Portfolio.findByPk(id, {
    include: [{ model: CategoryPortfolio, as: 'categoryPortfolio' }],
  }));
});

module.exports = {
  createPortfolio,
  updatePortfolio,
  getPortfolio,
  getAllPortfolios,
  deletePortfolio,
  uploadImagesPortfolio,
}; 