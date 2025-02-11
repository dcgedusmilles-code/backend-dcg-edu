const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/"));
  },
  filename: function (req, file, cb) {
    const uniquesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniquesuffix + ".jpeg");
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
  limits: { fileSize: 1000000 }, // Limite de 1MB por imagem
});


const productImgResize = async (req, res, next) => {
  if (!req.files) return next();
  const baseUrl = `${req.protocol}://${req.get("host")}/api/`;
  await Promise.all(
    req.files.map(async (file) => {
      const originalPath = file.path; // Caminho do arquivo original
      const newFilePath = `public/images/products/${file.filename}`; // Caminho para salvar a imagem redimensionada

      try {
        await sharp(file.path)
          .resize(300, 300)
          .toFormat("jpeg")
          .jpeg({ quality: 90 })
          .toFile(newFilePath);

        // Remover o arquivo original depois de redimensioná-lo
        await fs.unlink(originalPath);
      } catch (err) {
        console.error(`Error processing file ${originalPath}:`, err);
      }
    })
  );
  next();
};



const blogImgResize = async (req, res, next) => {
  if (!req.files) return next();
    const baseUrl = `${req.protocol}://${req.get("host")}/api/`

  req.body.images = [];  // Inicializar o array de imagens

  await Promise.all(
    req.files.map(async (file) => {
      const newFilePath = `public/images/blogs/${file.filename}`; // Caminho para salvar a imagem redimensionada

      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(newFilePath);

      // Adicionar o caminho da imagem ao array de imagens no body
      //req.body.images.push(newFilePath);

      req.body.images.push(`${baseUrl}public/images/blogs/${file.filename}`);

      // Remover o arquivo original se necessário
      // fs.unlinkSync(file.path); 
    })
  );
  
  next(); 
};



const serviceImgResize = async (req, res, next) => {
  if (!req.files) return next();

  req.body.image = "";  // Inicializar o array de imagens
  const baseUrl = `${req.protocol}://${req.get("host")}/api/`

  await Promise.all(
    req.files.map(async (file) => {
      const newFilePath = `public/images/services/${file.filename}`; // Caminho para salvar a imagem redimensionada

      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(newFilePath);

      // Adicionar o caminho da imagem ao array de imagens no body
      req.body.image =baseUrl+""+newFilePath;

      // Remover o arquivo original se necessário
      // fs.unlinkSync(file.path); 
    })
  );
  
  next(); 
};


//const fs = require('fs');
//const path = require('path');

const brandImgResize = async (req, res, next) => {
  if (!req.files) return next();

  req.body.images = "";
  const baseUrl = `${req.protocol}://${req.get("host")}/api/`;
  const uploadDir = path.join(__dirname, "..", "public", "images", "brand");

  // Garante que a pasta existe
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  await Promise.all(
    req.files.map(async (file) => {
      const newFilePath = path.join(uploadDir, file.filename); // Caminho correto

      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(newFilePath);

      req.body.images = baseUrl + "public/images/brand/" + file.filename;
    })
  );

  next();
};





module.exports = { uploadPhoto, productImgResize, blogImgResize,serviceImgResize,brandImgResize };
