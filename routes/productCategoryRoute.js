const express = require("express");
const router = express.Router();

const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getallCategory,
} = require("../controller/prodcategoryCtrl");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.get("/all", getallCategory);
router.get("/:id", getCategory);
router.put("/:id", authMiddleware, isAdmin, updateCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteCategory);
router.post("/", authMiddleware, isAdmin, createCategory);

module.exports = router;