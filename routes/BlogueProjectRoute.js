const express = require("express");
const {
    createProject,
    getAllProjects,
    getProject,
    updateProject,
    deleteProject
} = require("../controller/projectController/projectCtrl");

const checkPermission = require("../middlewares/checkPermission")
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { blogImgResize, uploadPhoto } = require("../middlewares/uploadImage");
const router = express.Router();

router.post("/", 
authMiddleware, checkPermission('create'),
uploadPhoto.array("images", 10),
blogImgResize, createProject
);



router.put("/:id", authMiddleware, checkPermission('update'), updateProject);
router.get("/:id",authMiddleware, checkPermission('read'), getProject);
router.get("/",authMiddleware, checkPermission('read'), getAllProjects);
router.delete("/:id", authMiddleware, isAdmin, deleteProject);

module.exports = router;
