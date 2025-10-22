const http = require("http");
const https = require('https');
const bodyParser = require("body-parser");
const express = require("express");
const { sequelize } = require("./models"); // já puxa dbConnect internamente
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./docs/swagger');
const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config(); // .env deve conter as infos do banco MySQL


const app = express();
app.use(morgan("dev"));
app.use(cors({
    origin: '*'
}));

app.use(function (req, res, next) {
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


// DCG EDU Routes
app.use('/api', routes);


// documentação Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



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
sequelize.authenticate().then(() => {
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





