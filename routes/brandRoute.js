const express = require("express");
const router = express.Router();

const { brandImgResize, uploadPhoto } = require("./../middlewares/uploadImage");

const {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getallBrand,
  uploadImages,
} = require("../controller/brandCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const checkPermission = require("../middlewares/checkPermission");

router.post(
  "/",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("image", 2),
  createBrand,
  uploadImagens
);

router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("image", 2),
  updateBrand,
  uploadImagens
);
router.put(
  "/:id",
  authMiddleware,
  isAdmin,
  checkPermission("update"),
  updateBrand
);
router.delete("/:id", authMiddleware, isAdmin, deleteBrand);
router.get("/:id", getBrand);
router.get("/", getallBrand);

module.exports = router;
