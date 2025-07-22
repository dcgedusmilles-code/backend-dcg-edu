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
router.get("/all", getAllCategoryPortfolios);
router.get("/:id", getCategoryPortfolio);

module.exports = router; 