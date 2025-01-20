const express = require("express");
const {
  getAllProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
} = require("../controller/projectController/projectCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProject);

router.get("/:id", getProject);

router.put("/:id", authMiddleware, isAdmin, updateProject);
router.delete("/:id", authMiddleware, isAdmin, deleteProject);

router.get("/", getAllProjects);

module.exports = router;
