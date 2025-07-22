const asyncHandler = require("express-async-handler");
const Project = require('../models').Project;

const createProject = asyncHandler(async (req, res) => {
  try {
    const imageUrls = req.uploadedImages || [];
    const newProject = await Project.create({
      ...req.body,
      images: imageUrls,
    });
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const updateProject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    await project.update(req.body);
    res.json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const getProject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const getAllProjects = asyncHandler(async (req, res) => {
  try {
    const allProjects = await Project.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(allProjects);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const deleteProject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    await project.destroy();
    res.status(200).json({ message: "Project deleted successfully", project });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = {
  createProject,
  updateProject,
  getProject,
  getAllProjects,
  deleteProject,
};
