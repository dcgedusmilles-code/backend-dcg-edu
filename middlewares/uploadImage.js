const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "../public/images/"));
//   },
//   filename: function (req, file, cb) {
//     const uniquesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniquesuffix + ".jpeg");
//   },
// });

// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image")) {
//     cb(null, true);
//   } else {
//     cb({ message: "Unsupported file format" }, false);
//   }
// };

// const uploadPhoto = multer({
//   storage: storage,
//   fileFilter: multerFilter,
//   limits: { fileSize: 1000000 }, // Limite de 1MB por imagem
// });

// const productImgResize = async (req, res, next) => {
//   if (!req.files) return next();
//   const baseUrl = `${req.protocol}://${req.get("host")}/api/`;
//   await Promise.all(
//     req.files.map(async (file) => {
//       const originalPath = file.path; // Caminho do arquivo original
//       const newFilePath = `public/images/products/${file.filename}`; // Caminho para salvar a imagem redimensionada

//       await sharp(file.path)
//         .resize(300, 300)
//         .toFormat("jpeg")
//         .jpeg({ quality: 90 })
//         .toFile(newFilePath);

//       // Remover o arquivo original depois de redimensioná-lo
//       fs.unlinkSync(originalPath);
//     })
//   );
//   next();
// };

// const blogImgResize = async (req, res, next) => {
//   if (!req.files) return next();
//   const baseUrl = `${req.protocol}://${req.get("host")}/api/`;

//   req.body.images = []; // Inicializar o array de imagens

//   await Promise.all(
//     req.files.map(async (file) => {
//       const newFilePath = `public/images/blogs/${file.filename}`; // Caminho para salvar a imagem redimensionada

//       await sharp(file.path)
//         .resize(300, 300)
//         .toFormat("jpeg")
//         .jpeg({ quality: 90 })
//         .toFile(newFilePath);

//       // Adicionar o caminho da imagem ao array de imagens no body
//       //req.body.images.push(newFilePath);

//       req.body.images.push(`${baseUrl}public/images/blogs/${file.filename}`);

//       // Remover o arquivo original se necessário
//       // fs.unlinkSync(file.path);
//     })
//   );

//   next();
// };

// const serviceImgResize = async (req, res, next) => {
//   if (!req.files) return next();

//   req.body.image = ""; // Inicializar o array de imagens
//   const baseUrl = `${req.protocol}://${req.get("host")}/api/`;

//   await Promise.all(
//     req.files.map(async (file) => {
//       const newFilePath = `public/images/services/${file.filename}`; // Caminho para salvar a imagem redimensionada

//       await sharp(file.path)
//         .resize(300, 300)
//         .toFormat("jpeg")
//         .jpeg({ quality: 90 })
//         .toFile(newFilePath);

//       // Adicionar o caminho da imagem ao array de imagens no body
//       req.body.image = baseUrl + "" + newFilePath;

//       // Remover o arquivo original se necessário
//       // fs.unlinkSync(file.path);
//     })
//   );

//   next();
// };

// const brandImgResize = async (req, res, next) => {
//   if (!req.files) return next();
//   const baseUrl = `${req.protocol}://${req.get("host")}/api/`;

//   req.body.images = []; // Inicializar o array de imagens

//   await Promise.all(
//     req.files.map(async (file) => {
//       const newFilePath = `public/images/brand/${file.filename}`; // Caminho para salvar a imagem redimensionada

//       await sharp(file.path)
//         .resize(300, 300)
//         .toFormat("jpeg")
//         .jpeg({ quality: 90 })
//         .toFile(newFilePath);

//       // Adicionar o caminho da imagem ao array de imagens no body
//       //req.body.images.push(newFilePath);

//       req.body.images.push(`${baseUrl}public/images/brand/${file.filename}`);

//       // Remover o arquivo original se necessário
//       // fs.unlinkSync(file.path);
//     })
//   );

//   next();
// };

// module.exports = {
//   uploadPhoto,
//   productImgResize,
//   blogImgResize,
//   serviceImgResize,
//   brandImgResize,
// };

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
