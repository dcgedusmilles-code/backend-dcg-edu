const express = require("express");
const router = express.Router();

const {
  createProject,
  updateProject,
  getProject,
  getAllProjects,
  deleteProject,
} = require("../controller/projectCtrl");

const checkPermission = require("../middlewares/checkPermission");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { resizeAndSaveImage, uploadPhoto } = require("../middlewares/uploadImage");

router.post(
  "/",
  authMiddleware,
  checkPermission("create"),
  uploadPhoto.array("images", 10),
  resizeAndSaveImage,
  createProject
);

router.put("/:id", authMiddleware, checkPermission("update"), updateProject);
router.get("/:id", authMiddleware, checkPermission("read"), getProject);
router.get("/", authMiddleware, checkPermission("read"), getAllProjects);
router.delete("/:id", authMiddleware, isAdmin, deleteProject);

module.exports = router;