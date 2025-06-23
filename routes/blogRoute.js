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
router.get("/:id", authMiddleware, checkPermission("read"), getBlog);
router.get("/", authMiddleware /*, checkPermission("read"),*/, getAllBlogs);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);
