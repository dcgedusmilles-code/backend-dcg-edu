const express = require("express");
const { brandImgResize, uploadPhoto } = require("./../middlewares/uploadImage");
const {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getallBrand,
} = require("../controller/brandCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post(
  "/",
  authMiddleware,
  uploadPhoto.array("image", 10),
  brandImgResize,
  isAdmin,
  createBrand
);

router.put(
  "/:id",
  authMiddleware,
  uploadPhoto.array("image", 10),
  brandImgResize,
  isAdmin,
  updateBrand
);
router.delete("/:id", authMiddleware, isAdmin, deleteBrand);
router.get("/:id", getBrand);
router.get("/", getallBrand);

module.exports = router;
