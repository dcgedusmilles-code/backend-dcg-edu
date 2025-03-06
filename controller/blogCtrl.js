const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const cloudinaryUploadImg = require("../utils/cloudinary");
const fs = require("fs");
const path = require("path");

// const createBlog = asyncHandler(async (req, res) => {
//   console.log("Body recebido:", req.body);
//   console.log("Arquivo recebido:", req.images);

//   if (!req.images) {
//     return res.status(400).json({ error: "Nenhuma imagem foi enviada" });
//   }

//   try {
//     const imgaUrl = `${req.protocol}://${req.get("host")}/public/images/${
//       req.images
//     }`;

//     const newBlog = await Blog.create({
//       title: req.body.title,
//       description: req.body.description,
//       category: req.body.category,
//       author: req.body.author,
//       images: imgaUrl,
//     });

//     const populatedBlog = await Blog.findById(newBlog._id)
//       .populate("category") // Popula a categoria para incluir descrição
//       .populate("likes")
//       .populate("dislikes");

//     console.log("populatedBlog", populatedBlog);

//     res.status(201).json(populatedBlog); // Use status 201 para indicar que o recurso foi criado
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// const createBlog = asyncHandler(async (req, res) => {

//   try {
//     if (!req.body.title || !req.body.description) {
//       return res
//         .status(400)
//         .json({ message: "Título e descrição são obrigatórios." });
//     }

//     // Armazena as imagens processadas pelo Multer no array req.body.images
//     const imageUrls = req.body.images || [];

//     const newBlog = await Blog.create({
//       title: req.body.title,
//       description: req.body.description,
//       category: req.body.category,
//       author: req.body.author,
//       images: imageUrls, // Agora, isso será um array de URLs
//     });
//     console.log("Opa___", newBlog);
//     const populatedBlog = await Blog.findById(newBlog._id)
//       .populate("category")
//       .populate("likes")
//       .populate("dislikes");

//     res.status(201).json(populatedBlog);
//   } catch (error) {
//     console.error("Erro ao criar blog:", error);
//     res.status(500).json({ message: "Erro interno no servidor" });
//   }
// });

// const createBlog = asyncHandler(async (req, res) => {
//   console.log("Body recebido:", req.body);
//   console.log("Arquivo recebido:", req.body.images);

//   // Verifica se a imagem foi enviada corretamente
//   if (!req.body.images) {
//     return res.status(400).json({ error: "Nenhuma imagem foi enviada" });
//   }

//   try {
//     const imageUrl = `${req.protocol}://${req.get("host")}/public/images/${
//       req.body.images
//     }`;

//     const newBlog = await Blog.create({
//       title: req.body.title,
//       description: req.body.description,
//       category: req.body.category,
//       author: req.body.author,
//       images: imageUrl, // Salva a URL da imagem no banco
//     });

//     const populatedBlog = await Blog.findById(newBlog._id)
//       .populate("category") // Popula a categoria para incluir descrição
//       .populate("likes")
//       .populate("dislikes");

//     console.log("Novo blog criado:", populatedBlog);

//     res.status(201).json(populatedBlog);
//   } catch (error) {
//     console.error("Erro ao criar blog:", error);
//     res.status(400).json({ error: error.message });
//   }
// });

const createBlog = asyncHandler(async (req, res) => {
  try {
    if (!req.body.title || !req.body.description) {
      return res
        .status(400)
        .json({ message: "Título e descrição são obrigatórios." });
    }

    // Obtém as imagens do `uploadImages`
    const imageUrls = req.uploadedImages || [];
    console.log("Vamkssssssssss", req.uploadedImages);

    const newBlog = await Blog.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      author: req.body.author,
      images: imageUrls, // 🔄 Agora estamos armazenando as imagens corretamente
    });

    console.log("Blog Criado:", newBlog);

    const populatedBlog = await Blog.findById(newBlog._id)
      .populate("category")
      .populate("likes")
      .populate("dislikes");

    res.status(201).json(populatedBlog);
  } catch (error) {
    console.error("Erro ao criar blog:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
});

const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateBlog);
  } catch (error) {
    throw new Error(error);
  }
});

const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getBlog = await Blog.findById(id)
      .populate("category")
      .populate("likes")
      .populate("dislikes");
    const updateViews = await Blog.findByIdAndUpdate(
      id,
      {
        $inc: { numViews: 1 },
      },
      { new: true }
    );
    res.json(getBlog);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllBlogs = asyncHandler(async (req, res) => {
  try {
    const getBlogs = await Blog.find()
      .populate("category")
      .populate("likes")
      .populate("dislikes");

    res.json(getBlogs);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    res.json(deletedBlog);
  } catch (error) {
    throw new Error(error);
  }
});

const liketheBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  validateMongoDbId(blogId);
  // Find the blog which you want to be liked
  const blog = await Blog.findById(blogId);
  // find the login user
  const loginUserId = req?.user?._id;
  // find if the user has liked the blog
  const isLiked = blog?.isLiked;
  // find if the user has disliked the blog
  const alreadyDisliked = blog?.dislikes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );
  if (alreadyDisliked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      { new: true }
    );
    res.json(blog);
  }
  if (isLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      { new: true }
    );
    res.json(blog);
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { likes: loginUserId },
        isLiked: true,
      },
      { new: true }
    );
    res.json(blog);
  }
});
const disliketheBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  validateMongoDbId(blogId);
  // Find the blog which you want to be liked
  const blog = await Blog.findById(blogId);
  // find the login user
  const loginUserId = req?.user?._id;
  // find if the user has liked the blog
  const isDisLiked = blog?.isDisliked;
  // find if the user has disliked the blog
  const alreadyLiked = blog?.likes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );
  if (alreadyLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      { new: true }
    );
    res.json(blog);
  }
  if (isDisLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      { new: true }
    );
    res.json(blog);
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { dislikes: loginUserId },
        isDisliked: true,
      },
      { new: true }
    );
    res.json(blog);
  }
});

const uploadImagesBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const uploader = (path) => cloudinaryUploadImg(path, "images");
    const urls = [];
    const files = req.body.images;
    for (const file of files) {
      const { path } = file;
      const newpath = await uploader(path);
      console.log(newpath);
      urls.push(newpath);
      fs.unlinkSync(path);
    }
    const findBlog = await Blog.findByIdAndUpdate(
      id,
      {
        images: urls.map((file) => {
          return file;
        }),
      },
      {
        new: true,
      }
    );
    res.json(findBlog);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  liketheBlog,
  disliketheBlog,
  uploadImagesBlog,
};
