const fs = require("fs");
const path = require("path");
const asyncHandler = require("express-async-handler");

const {
  cloudinaryUploadImg,
  cloudinaryDeleteImg,
} = require("../utils/cloudinary");

const uploadsImages = asyncHandler(async (req, res, next) => {
  try {
    if (!req.files || req.files.length === 0) {
      req.uploadedImages = [];
      return next();
    }
    const imageUrls = [];
    for (const file of req.files) {
      const { path } = file;
      const uploadedImage = await cloudinaryUploadImg(path, "images");
      imageUrls.push(uploadedImage);
      fs.unlinkSync(path);
    }
    req.uploadedImages = imageUrls;
    console.log("Imagens carregadas com sucesso:", req.uploadedImages);
    next();
  } catch (error) {
    console.error("❌ Erro no upload:", error);
    res.status(500).json({ message: "Erro no upload", error: error.message });
  }
});

const deleteImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await  cloudinaryDeleteImg(id, "images");
    res.json({ message: "Deleted" });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
   uploadsImages,
  deleteImages,
};
