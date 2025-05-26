const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

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
    let folder = "others"; // Padrão caso não seja especificado

    if (req.baseUrl.includes("products")) folder = "products";
    if (req.baseUrl.includes("blogs")) folder = "blogs";
    if (req.baseUrl.includes("services")) folder = "services";
    if (req.baseUrl.includes("brands")) folder = "brands";

    const uploadPath = path.join(__dirname, `../public/images/${folder}/`);
    ensureDirectoryExistence(uploadPath); // Garante que a pasta exista

    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpeg");
  },
});

// Filtro para permitir apenas imagens
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};

// Configuração do upload
const uploadPhoto = multer({
  storage: storage,
  fileFilter: multerFilter,
  limits: { fileSize: 1000000 }, // Limite de 1MB por imagem
});

// Função para redimensionar imagens dinamicamente
const resizeImage = async (req, res, next, folder) => {
  if (!req.files) return next();

  const baseUrl = `${req.protocol}://${req.get(
    "host"
  )}/public/images/${folder}/`;
  req.body.images = []; // Inicializa array para armazenar os caminhos

  await Promise.all(
    req.files.map(async (file) => {
      const newFilePath = path.join(
        __dirname,
        `../public/images/${folder}/${file.filename}`
      );
      ensureDirectoryExistence(newFilePath); // Garante que a pasta exista

      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(newFilePath);

      req.body.images.push(`${baseUrl}${file.filename}`);

      // Remover o arquivo original depois do redimensionamento
      fs.unlinkSync(file.path);
    })
  );

  next();
};

// Middleware para cada tipo de imagem
const productImgResize = (req, res, next) =>
  resizeImage(req, res, next, "products");
const blogImgResize = (req, res, next) => resizeImage(req, res, next, "blogs");
const serviceImgResize = (req, res, next) =>
  resizeImage(req, res, next, "services");
const brandImgResize = (req, res, next) =>
  resizeImage(req, res, next, "brands");

module.exports = {
  uploadPhoto,
  productImgResize,
  blogImgResize,
  serviceImgResize,
  brandImgResize,
};
