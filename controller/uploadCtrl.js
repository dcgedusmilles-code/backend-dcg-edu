const fs = require("fs");
const path = require("path");
const asyncHandler = require("express-async-handler");

const {
  cloudinaryUploadImg,
  cloudinaryDeleteImg,
} = require("../utils/cloudinary");

const uploadImages = asyncHandler(async (req, res, next) => {
  try {
    if (
      !req.body.images ||
      !Array.isArray(req.body.images) ||
      req.body.images.length === 0
    ) {
      return res.status(400).json({ message: "Nenhuma imagem enviada" });
    }

    console.log("🔍 DEBUG - Imagens Recebidas:", req.body.images.length);

    // Processar todas as imagens em paralelo
    const imageUrls = await Promise.all(
      req.body.images.map(async (imageBase64) => {
        if (!imageBase64.startsWith("data:image")) {
          console.log("🚨 Formato de imagem inválido:", imageBase64);
          throw new Error("Formato de imagem inválido");
        }

        const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
        const buffer = Buffer.from(base64Data, "base64");
        const fileName = `upload-${Date.now()}.png`;
        const tempPath = path.join(__dirname, "../public/images/", fileName);

        // Salva a imagem no servidor temporariamente
        fs.writeFileSync(tempPath, buffer);

        // Faz upload para o Cloudinary
        const uploadedImage = await cloudinaryUploadImg(tempPath, "images");

        // Remove o arquivo temporário
        fs.unlinkSync(tempPath);

        return uploadedImage; // Retorna a URL da imagem no Cloudinary
      })
    );

    console.log("✅ Imagens enviadas com sucesso:", imageUrls);

    req.uploadedImages = imageUrls; // Armazena URLs no `req` para o próximo middleware
    res
      .status(201)
      .json({ message: "Upload realizado com sucesso", images: imageUrls });

    next();
  } catch (error) {
    console.error("❌ Erro no upload:", error);
    res.status(500).json({ message: "Erro no upload", error: error.message });
  }
});

// const uploadImages = asyncHandler(async (req, res, next) => {
//   try {
//     if (!req.body.images) {
//       return res.status(400).json({ message: "Nenhuma imagem enviada" });
//     }

//     let imageUrls = [];
//     let imagePath = null;
//     let imageBase64 = req.body.images;

//     // Verifica se a imagem está em formato Base64
//     for (imageBase64 of req.body.images) {
//       if (imageBase64.startsWith("data:image")) {
//         const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
//         const buffer = Buffer.from(base64Data, "base64");
//         const fileName = `upload-${Date.now()}.png`; // Nome único
//         const tempPath = path.join(__dirname, "../public/images/", fileName);

//         // Salva o arquivo temporariamente no servidor
//         fs.writeFileSync(tempPath, buffer);
//         imagePath = tempPath;

//         // Faz upload para o Cloudinary
//         const uploadedImage = await cloudinaryUploadImg(imagePath, "images");
//         // Remove o arquivo temporário
//         fs.unlinkSync(imagePath);

//         imageUrls.push(uploadedImage);
//       } else {
//         return res.status(400).json({ message: "Formato de imagem inválido" });
//       }
//     }
//     res.status(201).json({
//       message: "Upload realizado com sucesso",
//       imageUrl: uploadedImage, // URL da imagem no Cloudinary
//     });
//     req.uploadedImages = imageUrls;
//     next();
//   } catch (error) {
//     console.error("Erro no upload:", error);
//     res.status(500).json({ message: "Erro no upload", error });
//   }
// });

// const uploadImages = asyncHandler(async (req, res) => {
//   try {
//     const uploader = (path) => cloudinaryUploadImg(path, "images");
//     const urls = [];
//     const files = req.body.images;
//     for (const file of files) {
//       const { path } = file;
//       const newpath = await uploader(path);
//       urls.push(newpath);
//       fs.unlinkSync(path);
//     }
//     const images = urls.map((file) => {
//       return file;
//     });
//     res.json(images);
//   } catch (error) {
//     throw new Error(error);
//   }
// });

// const uploadImages = asyncHandler(async (req, res) => {
//   console.log("Request", req.file);
//   console.log("Request", req.body.images);
//   try {
//     if (!req.body.images) {
//       return res.status(400).json({ message: "Nenhum arquivo enviado" });
//     }

//     // Criar o documento da imagem no MongoDB
//     const uploadedFile = await Upload.create({
//       fileName: req.file.originalname,
//       fileExt: req.file.mimetype,
//       file: req.file.filename, // Apenas o nome do arquivo
//     });
//     console.log("Request uploadedFile", uploadedFile);

//     res.status(201).json({
//       message: "Upload realizado com sucesso",
//       imageId: uploadedFile._id, // Retornando o _id correto para salvar no Blog
//       imagePath: `${req.protocol}://${req.get("host")}/public/images/${
//         req.file.filename
//       }`,
//     });
//   } catch (error) {
//     console.error("Erro ao fazer upload:", error);
//     res.status(500).json({ message: "Erro no upload", error });
//   }
// });

const deleteImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = cloudinaryDeleteImg(id, "images");
    res.json({ message: "Deleted" });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  uploadImages,
  deleteImages,
};
