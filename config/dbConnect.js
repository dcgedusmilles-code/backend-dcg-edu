const { Sequelize } = require("sequelize");

const connection = new Sequelize(
  process.env.MYSQL_DB,     // nome do banco
  process.env.MYSQL_USER,   // usuário
  process.env.MYSQL_PASS,   // senha
  {
    host: process.env.MYSQL_HOST || "localhost",
    dialect: "mysql",
    port: process.env.MYSQL_PORT || 3306,
    logging: false,
  }
);

module.exports = connection;
