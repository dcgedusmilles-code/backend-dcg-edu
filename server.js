// const bodyParser = require("body-parser");
// const express = require("express");
// const dbConnect = require("./config/dbConnect"); // Agora conecta ao MySQL
// const { sequelize } = require("./models"); // ← Aqui importa o index.js dos models
// const { notFound, errorHandler } = require("./middlewares/errorHandler");
// const app = express();
// require("dotenv").config(); // .env deve conter as infos do banco MySQL
// const PORT = process.env.APP_PORT || 5000;

// // Swagger
// const swaggerUi = require("swagger-ui-express");
// const swaggerJsdoc = require("swagger-jsdoc");

// const path = require("path");
// const cookieParser = require("cookie-parser");
// const morgan = require("morgan");
// const cors = require("cors");

// // Swagger Config
// const swaggerOptions = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "API Blog Regiz Grafica",
//       version: "1.0.0",
//       description: "API para facilitar a integração com o blog Regiz Grafica",
//     },
//     servers: [{ url: "http://localhost:5000" }],
//   },
//   apis: ["./routes/*.js"],
// };

// const swaggerDocs = swaggerJsdoc(swaggerOptions);

// // Conecta ao banco
// dbConnect();

// app.use(morgan("dev"));
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// // Inicialização do servidor
// app.listen(PORT, () => {
//   console.log(`Server is running at PORT ${PORT}`);
// });




const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Rotas
const authRouter = require("./routes/authRoute");
const projectsRouter = require("./routes/projectsRoute");
const productRouter = require("./routes/productRoute");
const blogRouter = require("./routes/blogRoute");
const categoryRouter = require("./routes/prodcategoryRoute");
const blogcategoryRouter = require("./routes/blogCatRoute");
const brandRouter = require("./routes/brandRoute");
const colorRouter = require("./routes/colorRoute");
const enqRouter = require("./routes/enqRoute");
const couponRouter = require("./routes/couponRoute");
const uploadRouter = require("./routes/uploadRoute");
const organizationRouter = require("./routes/organizationRoute");
const serviceRoutes = require("./routes/serviceRoute");
const contactRouter = require("./routes/contactRoute");
const BlogueProjectRoute = require("./routes/BlogueProjectRoute");
// Adicione outras rotas conforme necessário

// Rotas da API
app.use("/api/brand", brandRouter);
app.use("/api/user", authRouter);
app.use("/api/service", serviceRoutes);
app.use("/api/service/category", serviceRoutes);
app.use("/api/product", productRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", categoryRouter);
app.use("/api/blogcategory", blogcategoryRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/color", colorRouter);
app.use("/api/enquiry", enqRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/organization", organizationRouter);
app.use("/api/contact", contactRouter);
app.use("/api/project", BlogueProjectRoute);

// Swagger Docs
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Arquivos públicos
app.use("/api/public", express.static(path.join(__dirname, "public")));
app.use("/public", express.static(path.join(__dirname, "public")));

// Middlewares de erro
app.use(notFound);
app.use(errorHandler);


// Rota base
app.get("/", (req, res) => {
  res.send("API funcionando...");
});

// Conexão com Sequelize e inicialização do servidor
const PORT = process.env.PORT || 5000;
const { sequelize } = require("./models");

sequelize.authenticate()
  .then(() => {
    console.log("✅ Conectado ao MySQL com Sequelize");
    return sequelize.sync(); // Em desenvolvimento, use { alter: true } se necessário
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Erro ao conectar ao banco de dados:", err);
  });
