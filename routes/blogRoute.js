const express = require("express");
const router = express.Router();
module.exports = router;

const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeTheBlog,
  dislikeTheBlog,
  uploadImagesBlog,
} = require("../controller/blogCtrl");

const checkPermission = require("../middlewares/checkPermission");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { uploadPhoto } = require("../middlewares/uploadImage");
const { uploadsImages } = require("../controller/uploadCtrl");

router.get("/:id", getBlog);
router.get("/", getAllBlogs);

router.post(
  "/",
  authMiddleware,
  checkPermission("create"),
  uploadPhoto.array("images", 10), 
  uploadsImages, 
  createBlog 
);

router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  uploadsImages,
  uploadImagesBlog
);

router.put("/likes", authMiddleware, likeTheBlog);
router.put("/dislikes", authMiddleware, dislikeTheBlog);
router.put("/:id", authMiddleware, checkPermission("update"), updateBlog);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);
