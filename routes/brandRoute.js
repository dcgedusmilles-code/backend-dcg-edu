const express = require("express");
const router = express.Router();

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
const { uploadsImages } = require("../controller/uploadCtrl");
const { uploadPhoto } = require("./../middlewares/uploadImage");


router.post(
  "/",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  uploadsImages,
  createBrand
);

router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  checkPermission("update"),
  uploadPhoto.array("images", 10),
  uploadsImages,
  uploadImages
);

router.put(
  "/:id",
  authMiddleware,
  isAdmin,
  updateBrand
);
router.delete("/:id", authMiddleware, isAdmin, deleteBrand);
router.get("/:id", getBrand);
router.get("/", getallBrand);

module.exports = router;
