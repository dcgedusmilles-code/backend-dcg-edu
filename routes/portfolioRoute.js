const express = require("express");
const router = express.Router();

const {
  createPortfolio,
  updatePortfolio,
  getPortfolio,
  getAllPortfolios,
  deletePortfolio,
  uploadImagesPortfolio,
} = require("../controller/portfolioCtrl");

const checkPermission = require("../middlewares/checkPermission");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { uploadPhoto } = require("../middlewares/uploadImage");
const { uploadsImages } = require("../controller/uploadCtrl");

router.post(
  "/",
  authMiddleware,
  checkPermission("create"),
  uploadPhoto.array("images", 10), 
  uploadsImages, 
  createPortfolio 
);

router.put(
  "/update/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  uploadsImages,
  uploadImagesPortfolio
);

router.put(
  "/:id",
  authMiddleware,
  checkPermission("update"),
  uploadPhoto.array("images", 10),
  uploadsImages,
  updatePortfolio
);
router.get("/:id", authMiddleware, checkPermission("read"), getPortfolio);
router.get("/", authMiddleware /*, checkPermission("read"),*/, getAllPortfolios);
router.delete("/:id", authMiddleware, isAdmin, deletePortfolio);

module.exports = router; 