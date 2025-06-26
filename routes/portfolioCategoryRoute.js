const express = require("express");
const router = express.Router();

const {
  createCategoryPortfolio,
  updateCategoryPortfolio,
  deleteCategoryPortfolio,
  getCategoryPortfolio,
  getAllCategoryPortfolios,
} = require("../controller/portfolioCatCtrl");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createCategoryPortfolio);
router.put("/:id", authMiddleware, isAdmin, updateCategoryPortfolio);
router.delete("/:id", authMiddleware, isAdmin, deleteCategoryPortfolio);

// Obter todas as categorias de portfólio (rota genérica primeiro)
router.get("/all", getAllCategoryPortfolios);

// Obter uma categoria de portfólio por ID (rota específica depois)
router.get("/:id", getCategoryPortfolio);

module.exports = router; 