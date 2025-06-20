const asyncHandler = require("express-async-handler");
const sequelize = require("../config/dbConnect");
const fs = require("fs");
const { Blog, BCategory, User } = require('../models');

const { cloudinaryUploadImg } = require("../utils/cloudinary");

// CREATE
const createBlog = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.description) {
    return res.status(400).json({ message: "Título e descrição são obrigatórios." });
  }

  const imageUrls = req.uploadedImages || [];

  const newBlog = await Blog.create({
    title: req.body.title,
    description: req.body.description,
    categoryId: req.body.category,
    author: req.body.author,
    images: imageUrls,
  });

  const populatedBlog = await Blog.findByPk(newBlog.id, {
    include: [{ model: BCategory, as: 'category' }],
  });

  res.status(201).json(populatedBlog);
});

// UPDATE
const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findByPk(id);
  if (!blog) return res.status(404).json({ message: "Blog não encontrado." });
  await blog.update(req.body);
  res.json(blog);
});

// GET ONE (incrementa views)
const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findByPk(id);
  if (!blog) return res.status(404).json({ message: "Blog não encontrado." });

  await blog.increment("numViews");
  res.json(blog);
});

// GET ALL
const getAllBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.findAll({
    include: [{ model: BCategory, as: 'category' }],
    order: [["createdAt", "DESC"]],
  });
  res.json(blogs);
});

// DELETE
const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deleted = await Blog.destroy({ where: { id } });
  if (!deleted) return res.status(404).json({ message: "Blog não encontrado." });
  res.json({ message: "Blog deletado com sucesso." });
});

// LIKE
const likeTheBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  const userId = req.user.id;

  const blog = await Blog.findByPk(blogId);
  if (!blog) return res.status(404).json({ message: "Blog não encontrado." });

  const tx = await sequelize.transaction();
  try {
    await blog.removeDislike(req.user, { transaction: tx });
    const hasLiked = await blog.hasLike(req.user, { transaction: tx });
    if (hasLiked) {
      await blog.removeLike(req.user, { transaction: tx });
    } else {
      await blog.addLike(req.user, { transaction: tx });
    }
    await tx.commit();

    const updated = await Blog.findByPk(blogId);
    res.json(updated);
  } catch (err) {
    await tx.rollback();
    throw err;
  }
});

// DISLIKE
const dislikeTheBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  const userId = req.user.id;

  const blog = await Blog.findByPk(blogId);
  if (!blog) return res.status(404).json({ message: "Blog não encontrado." });

  const tx = await sequelize.transaction();
  try {
    await blog.removeLike(req.user, { transaction: tx });
    const hasDisliked = await blog.hasDislike(req.user, { transaction: tx });
    if (hasDisliked) {
      await blog.removeDislike(req.user, { transaction: tx });
    } else {
      await blog.addDislike(req.user, { transaction: tx });
    }
    await tx.commit();

    const updated = await Blog.findByPk(blogId, {
      //include: [{ model: User, as: "likes" }, { model: User, as: "dislikes" }],
    });
    res.json(updated);
  } catch (err) {
    await tx.rollback();
    throw err;
  }
});

// UPLOAD IMAGES
const uploadImagesBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findByPk(id);
  if (!blog) return res.status(404).json({ message: "Blog não encontrado." });

  const urls = [];
  for (const file of req.body.images) {
    const uploaded = await cloudinaryUploadImg(file.path, "images");
    urls.push(uploaded);
    fs.unlinkSync(file.path);
  }

  await blog.update({ images: urls });
  res.json(await Blog.findByPk(id));
});

module.exports = {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeTheBlog,
  dislikeTheBlog,
  uploadImagesBlog,
};


