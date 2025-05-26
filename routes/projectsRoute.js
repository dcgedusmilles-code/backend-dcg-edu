const express = require("express");
const router = express.Router();

const {
  getAllProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
} = require("../controller/projectController/projectCtrl");

const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
router.post("/", authMiddleware, isAdmin, createProject);
router.get("/:id", getProject);
router.put("/:id", authMiddleware, isAdmin, updateProject);
router.delete("/:id", authMiddleware, isAdmin, deleteProject);
router.get("/", getAllProjects);

module.exports = router;
