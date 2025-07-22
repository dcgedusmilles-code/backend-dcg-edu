const express = require("express");
const router = express.Router();

const {
  createProduct,
  updateProduct,
  deleteProduct,
  getaProduct,
  getAllProduct,
  addToWishlist,
  rating
} = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const { uploadPhoto } = require("../middlewares/uploadImage");
const { uploadsImages } = require("../controller/uploadCtrl");
const checkPermission = require("../middlewares/checkPermission");


router.post("/",
  authMiddleware,
  isAdmin,
  checkPermission("create"),
  uploadPhoto.array("images", 10),
  uploadsImages,
  createProduct);

router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);

router.put("/:id", authMiddleware, isAdmin, isAdmin, checkPermission("create"),
  uploadPhoto.array("images", 10),
  uploadsImages, updateProduct);

router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.get("/:id", getaProduct);
router.get("/", getAllProduct);

module.exports = router;
