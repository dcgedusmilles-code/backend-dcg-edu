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
const {
  uploadPhoto, resizeAndSaveImage
} = require("./../middlewares/uploadImage");
const checkPermission = require("./../middlewares/checkPermission");
//Service routes

router.get("/", /*authMiddleware, checkPermission("read"),*/ getAllService);
router.get("/:id", /* authMiddleware, checkPermission("read"),*/ getOneService);
router.put(
  "/:id",
  authMiddleware,
  checkPermission("update"),
  uploadPhoto.array("image", 2),
  updateService
);
router.delete("/:id", authMiddleware, checkPermission("delete"), deleteService);

router.post(
  "/",
  authMiddleware,
  checkPermission("create"),
  uploadPhoto.array("image", 10),
  resizeAndSaveImage,
  createService
);

module.exports = router;
