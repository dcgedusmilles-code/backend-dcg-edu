const express = require("express");
const checkPermission = require("./../middlewares/checkPermission");
const {  createBrand,  updateBrand,  deleteBrand,  getBrand,  getallBrand} = require("../controller/brandCtrl");
const {
  brandImgResize,
  uploadPhoto,
} = require("../middlewares/uploadImage");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, checkPermission("create"),uploadPhoto.array("images", 10), brandImgResize, createBrand);


router.put("/:id", authMiddleware, isAdmin, updateBrand);
router.delete("/:id", authMiddleware, isAdmin, deleteBrand);
router.get("/:id", getBrand);
router.get("/", getallBrand);

module.exports = router;
