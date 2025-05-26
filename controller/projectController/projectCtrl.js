const asyncHandler = require("express-async-handler");
const BlogProject = require("../../models/projects/projectsModel");
const validateMongoDbId = require("../../utils/validateMongodbId");

const createProject = asyncHandler(async (req, res) => {
  try {
    const newProject = await BlogProject.create(req.body);
    res.status(201).json(newProject);
  } catch (error) {
    throw new Error(error);
  }
});

const updateProject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedProject = await BlogProject.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedProject);
  } catch (error) {
    throw new Error(error);
  }
});

const getProject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const Project = await BlogProject.findById(id);

    res.status(200).json(Project);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllProjects = asyncHandler(async (req, res) => {
  try {
    const allProjects = await BlogProject.find();
    res.status(200).json(allProjects);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteProject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedpROJECT = await BlogProject.findByIdAndDelete(id);
    res.status(200).json(deletedpROJECT);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
};
