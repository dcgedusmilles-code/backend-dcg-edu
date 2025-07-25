const https = require('https');
const bodyParser = require("body-parser");
const express = require("express");
const { sequelize } = require("./models"); // já puxa dbConnect internamente
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
require("dotenv").config(); // .env deve conter as infos do banco MySQL
const PORT = process.env.APP_PORT || 5000;

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
app.use(cors());
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

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api/public", express.static(path.join(__dirname, "public")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("API rodando com sucesso!");
});

const options = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt')
};

app.use(notFound);
app.use(errorHandler);

// Inicialização da conexão com banco de dados
sequelize.authenticate()
  .then(() => {
    console.log("Conexão com MySQL estabelecida.");
    return sequelize.sync();
  })
  .then(() => {
    if (require.main === module) {
      const PORT = process.env.APP_PORT || 5000;
      // app.listen(PORT,() => console.log(`API running on port ${PORT}`));
      https.createServer(options, app).listen(443, () => {
        console.log('✅ Servidor HTTPS ativo em https://SEU_IP:443');
      });
    } else {
      console.log("App carregada via Passenger.");
    }
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco:", err);
  });

module.exports = app;





