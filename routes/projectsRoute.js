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
const { uploadPhoto } = require("../middlewares/uploadImage");
const { uploadsImages } = require("../controller/uploadCtrl");

router.post(
  "/",
  authMiddleware,
  checkPermission("create"),
  uploadPhoto.array("images", 10),
  uploadsImages,
  createProject
);

router.put("/:id", authMiddleware, checkPermission("update"), updateProject);
router.get("/:id", authMiddleware, checkPermission("read"), getProject);
router.get("/", authMiddleware, checkPermission("read"), getAllProjects);
router.delete("/:id", authMiddleware, isAdmin, deleteProject);

module.exports = router;