const http = require("http");
const https = require('https');
const bodyParser = require("body-parser");
const express = require("express");
const { sequelize } = require("./models"); // já puxa dbConnect internamente
const { notFound, errorHandler } = require("./middlewares/errorHandler");
require("dotenv").config(); // .env deve conter as infos do banco MySQL
const PORT = process.env.APP_PORT || 5000;
const app = express();

// Rotas
const authRouter = require("./routes/authRoute");
const projectsRouter = require("./routes/projectsRoute");

const productRouter = require("./routes/productRoute");
// const categoryRouter = require("./routes/productcategoryRoute");

const blogRouter = require("./routes/blogRoute");
const blogcategoryRouter = require("./routes/blogCatRoute");

const serviceRoutes = require("./routes/serviceRoute");
const serviceCategoryRoutes = require("./routes/serviceCategoryRoute");

const portfolioRouter = require("./routes/portfolioRoute");
const portfolioCategoryRouter = require("./routes/portfolioCategoryRoute");

const brandRouter = require("./routes/brandRoute");
const colorRouter = require("./routes/colorRoute");
const enqRouter = require("./routes/enqRoute");
const couponRouter = require("./routes/couponRoute");
const uploadRouter = require("./routes/uploadRoute");
const organizationRouter = require("./routes/organizationRoute");
const contactRouter = require("./routes/emailMessageRoute");

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

// Swagger Config
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Blog Regiz Grafica",
      version: "1.0.0",
      description: "API para facilitar a integração com o blog Regiz Grafica",
    },
    servers: [{ url: "http://localhost:5000" }],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Conecta ao banco
// dbConnect();

app.use(morgan("dev"));
app.use(cors({
  origin : '*'
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Rotas da API
app.use("/api/brand", brandRouter);
app.use("/api/user", authRouter);
app.use("/api/service", serviceRoutes);
app.use("/api/service/category", serviceCategoryRoutes);
app.use("/api/product", productRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/blog", blogRouter);
// app.use("/api/product/category", categoryRouter);
app.use("/api/blogcategory", blogcategoryRouter);
app.use("/api/portfolio", portfolioRouter);
app.use("/api/portfolio/category", portfolioCategoryRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/color", colorRouter);
app.use("/api/enquiry", enqRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/organization", organizationRouter);
app.use("/api/contact", contactRouter);

// Swagger Docs
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Arquivos públicos
app.use("/api/public", express.static(path.join(__dirname, "public")));
app.use("/public", express.static(path.join(__dirname, "public")));


// Rota base
app.get("/", (req, res) => {
  res.send("API rodando com sucesso!");
});

// Middlewares de erro
app.use(notFound);
app.use(errorHandler);

// Inicialização da conexão com banco de dados
sequelize.authenticate()
  .then(() => {
    console.log("Conexão com MySQL estabelecida.");
    return sequelize.sync(); // sincronia do Sequelize
  })
  .then(() => {
    if (require.main === module) {
      // Rodando manualmente com `node server.js`
      // http.createServer(options, app).listen(PORT, '0.0.0.0');
      const PORT = process.env.APP_PORT || 5000;
      app.listen(PORT, '0.0.0.0');
    } else {
      // Passenger irá cuidar da porta automaticamente
      console.log("App carregada via Passenger.");
    }
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco:", err);
  });

module.exports = app;





