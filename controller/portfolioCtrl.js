const asyncHandler = require("express-async-handler");
const sequelize = require("../config/dbConnect");
const { Portfolio, CategoryPortfolio } = require('../models');

const { cloudinaryUploadImg } = require("../utils/cloudinary");

// CREATE
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

// UPDATE
const updatePortfolio = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const portfolio = await Portfolio.findByPk(id);
  if (!portfolio) {
    return res.status(404).json({ message: "Portfólio não encontrado." });
  }

  const dataToUpdate = { ...req.body };

  let finalImages = [];

  // Step 1: Determine the base set of images from frontend (existing ones)
  if (dataToUpdate.images) {
    let receivedImages = dataToUpdate.images;

    // Handle multi-serialization
    while (typeof receivedImages === 'string' && receivedImages.startsWith('[') && receivedImages.endsWith(']')) {
      try {
        const tempParsed = JSON.parse(receivedImages);
        if (typeof tempParsed === 'string') {
          receivedImages = tempParsed;
        } else {
          receivedImages = tempParsed; // It's an array/object, break
          break;
        }
      } catch (e) {
        console.error("Erro ao parsear JSON aninhado para imagens do req.body:", e);
        receivedImages = []; // Fallback
        break;
      }
    }

    if (Array.isArray(receivedImages)) {
      finalImages = receivedImages; // This is the explicit set of existing images from frontend
    } else {
      console.warn('DEBUG - Imagens do frontend não são um array JSON válido após parse. Usando imagens do DB.');
      // Se o frontend enviou imagens, mas elas são inválidas, use as imagens do DB como fallback
      let dbImages = portfolio.images;
      if (typeof dbImages === 'string') {
        try { dbImages = JSON.parse(dbImages); } catch (e) { dbImages = []; }
      }
      if (Array.isArray(dbImages)) {
        finalImages = dbImages;
      } else {
        finalImages = []; // Default para array vazio se as imagens do DB também forem inválidas
      }
    }
  } else {
    // Se o frontend NÃO enviou o campo 'images' no req.body,
    // assumimos que é para manter as imagens existentes do DB (a menos que novas fotos sejam enviadas, tratado a seguir)
    let dbImages = portfolio.images;
    if (typeof dbImages === 'string') {
      try { dbImages = JSON.parse(dbImages); } catch (e) { dbImages = []; }
    }
    if (Array.isArray(dbImages)) {
      finalImages = dbImages;
    } else {
      finalImages = []; // Default para array vazio
    }
  }

  // Step 2: Adicionar novas imagens carregadas via Multer/Cloudinary
  if (req.uploadedImages && req.uploadedImages.length > 0) {
    finalImages = finalImages.concat(req.uploadedImages);
  }

  // Step 3: Remover duplicatas com base na URL da imagem
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

  // Garanta que categoryId seja definido corretamente se 'category' for enviado
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

// GET ONE (incrementa views)
const getPortfolio = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const portfolio = await Portfolio.findByPk(id);
  if (!portfolio) return res.status(404).json({ message: "Portfólio não encontrado." });

  await portfolio.increment("numViews");
  res.json(portfolio);
});

// GET ALL
const getAllPortfolios = asyncHandler(async (req, res) => {
  const portfolios = await Portfolio.findAll({
    include: [{ model: CategoryPortfolio, as: 'categoryPortfolio' }],
    order: [["createdAt", "DESC"]],
  });
  res.json(portfolios);
});

// DELETE
const deletePortfolio = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deleted = await Portfolio.destroy({ where: { id } });
  if (!deleted) return res.status(404).json({ message: "Portfólio não encontrado." });
  res.json({ message: "Portfólio deletado com sucesso." });
});

// UPLOAD IMAGES
const uploadImagesPortfolio = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const portfolio = await Portfolio.findByPk(id);
  if (!portfolio) return res.status(404).json({ message: "Portfólio não encontrado." });

  const urls = req.uploadedImages || [];
  const existingImages = portfolio.images || [];
  const updatedImages = existingImages.concat(urls);

  // Criar um objeto com os dados a serem atualizados, incluindo as imagens
  const dataToUpdate = {
    ...req.body,
    images: updatedImages,
  };

  // Atualizar o portfólio com todos os dados enviados
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