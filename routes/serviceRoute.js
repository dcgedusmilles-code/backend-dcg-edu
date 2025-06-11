const express = require("express");
const router = express.Router();

const { authMiddleware } = require("./../middlewares/authMiddleware");
const {
  serviceImgResize,
  uploadPhoto,
} = require("./../middlewares/uploadImage");
const checkPermission = require("./../middlewares/checkPermission");

const {
  createService,
  getAllService,
  getOneService,
  updateService,
  deleteService,
} = require("../controller/serviceCtrl");

//Service routes
router.post(
  "/",
  authMiddleware,
  checkPermission("create"),
  uploadPhoto.array("image", 10),
  serviceImgResize,
  createService
);
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



module.exports = router;
