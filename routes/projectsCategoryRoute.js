const express = require("express");
const router = express.Router();

const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getallCategory,
} = require("../controller/projectCtrl");

const checkPermission = require("../middlewares/checkPermission");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post(
  "/",
  authMiddleware,
  checkPermission("create"),
  createCategory
);

router.put("/:id", authMiddleware, checkPermission("update"), updateCategory);
router.get("/:id", authMiddleware, checkPermission("read"), getCategory);
router.get("/", authMiddleware, checkPermission("read"), getallCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteCategory);

module.exports = router;