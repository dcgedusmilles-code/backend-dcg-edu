const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const { Image } = require("../models"); // Sequelize model

// Função para criar pasta se não existir
const ensureDirectoryExistence = (filePath) => {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
};

// Configuração do Storage do Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destinationPath = path.join(__dirname, "../public/images/temp/");
    ensureDirectoryExistence(destinationPath);
    cb(null, destinationPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};

const uploadPhoto = multer({
  storage: storage,
  fileFilter: multerFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limite de 5MB por imagem
});

// Middleware para redimensionar e salvar imagem no banco
const resizeAndSaveImage = async (req, res, next) => {
  if (!req.file) return next();

  const outputDir = path.join(__dirname, "../public/images/uploads/");
  ensureDirectoryExistence(outputDir);

  const filename = req.file.filename;
  const outputPath = path.join(outputDir, filename);

  await sharp(req.file.path)
    .resize(300, 300)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(outputPath);

  fs.unlinkSync(req.file.path); // remove imagem temporária

  // Registra no banco
  const image = await Image.create({
    filename: filename,
    url: `images/uploads/${filename}`,
    type: req.body.type || "generic",
  });

  req.body.imageId = image.id; // envia o ID para uso em controllers

  next();
};

module.exports = {
  uploadPhoto,
  resizeAndSaveImage,
};

