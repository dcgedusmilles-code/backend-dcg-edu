// config/config.js

require('dotenv').config(); // Isso irá ler o seu arquivo .env

module.exports = {
  development: {
    username: process.env.MYSQL_USER,     // Irá usar "root"
    password: process.env.MYSQL_PASS,     // Irá usar "" (senha vazia)
    database: process.env.MYSQL_DB,       // Irá usar "regizgrafica"
    host: process.env.MYSQL_HOST,         // Irá usar "localhost"
    port: process.env.MYSQL_PORT,         // Irá usar "3306"
    dialect: 'mysql',
    logging: console.log
  },
  // Você pode configurar 'test' e 'production' depois, se precisar.
  // Por agora, o 'development' é o que importa para a CLI.
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB, // Ex: "regizgrafica_test"
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    logging: console.log
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    logging: console.log
  }
};