const express = require("express");
const router = express.Router();

const {
  createService,
  getAllService,
  getOneService,
  updateService,
  deleteService,
} = require("../controller/serviceCtrl");


const { authMiddleware } = require("./../middlewares/authMiddleware");
const { uploadPhoto } = require("./../middlewares/uploadImage");
const { uploadsImages } = require("./../controller/uploadCtrl");
const checkPermission = require("./../middlewares/checkPermission");
//Service routes

router.get("/", /*authMiddleware, checkPermission("read"),*/ getAllService);
router.get("/:id", /* authMiddleware, checkPermission("read"),*/ getOneService);
router.put(
  "/:id",
  authMiddleware,
  checkPermission("update"),
  uploadPhoto.array("image", 2),
  uploadsImages,
  updateService
);
router.delete("/:id", authMiddleware, checkPermission("delete"), deleteService);

router.post(
  "/",
  authMiddleware,
  checkPermission("create"),
  uploadPhoto.array("images", 10),
  uploadsImages,
  createService
);

module.exports = router;
