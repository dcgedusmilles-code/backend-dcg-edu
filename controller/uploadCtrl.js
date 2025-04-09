const fs = require("fs");
const path = require("path");
const asyncHandler = require("express-async-handler");

const {
  cloudinaryUploadImg,
  cloudinaryDeleteImg,
} = require("../utils/cloudinary");

const uploadImages = asyncHandler(async (req, res, next) => {
  try {
    // console.log("🔍 DEBUG - Imagens Recebidas:", req.body);
    // if (
    //   // !req.body.images ||
    //   Array.isArray(req.body.images) ? req.body.images : [req.body.images]
    //   // ||
    //   // req.body.images.length === 0
    // ) {
    //   return res.status(400).json({ message: "Nenhuma imagem enviada" });
    // }
    const images = Array.isArray(req.body.images)
      ? req.body.images
      : [req.body.images];

    // Processar todas as imagens em paralelo
    const imageUrls = await Promise.all(
      images.map(async (imageBase64) => {
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

    // console.log("✅ Imagens enviadas com sucesso:", imageUrls);

    req.uploadedImages = imageUrls; // Armazena URLs no `req` para o próximo middleware
    // res
    //   .status(201)
    //   .json({ message: "Upload realizado com sucesso", images: imageUrls });

    next();
  } catch (error) {
    console.error("❌ Erro no upload:", error);
    res.status(500).json({ message: "Erro no upload", error: error.message });
  }
});

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
