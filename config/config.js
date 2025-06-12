// config/config.js

require('dotenv').config(); // Isso irá ler o seu arquivo .env

module.exports = {
  development: {
    username: process.env.MYSQL_USER,     // Irá usar "root"
    password: process.env.MYSQL_PASS,     // Irá usar "" (senha vazia)
    database: process.env.MYSQL_DB,       // Irá usar "regizgrafica"
    host: process.env.MYSQL_HOST,         // Irá usar "localhost"
    port: process.env.MYSQL_PORT,         // Irá usar "3306"
    dialect: 'mysql'
  },
  // Você pode configurar 'test' e 'production' depois, se precisar.
  // Por agora, o 'development' é o que importa para a CLI.
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB_TEST, // Ex: "regizgrafica_test"
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql'
  }
};