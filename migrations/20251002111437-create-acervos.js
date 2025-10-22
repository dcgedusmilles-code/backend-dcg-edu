'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('acervos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        titulo: {
          type: Sequelize.STRING
        },
        autor: {
          type: Sequelize.STRING
        },
        editora: {
          type: Sequelize.STRING
        },
        ano_publicacao: {
          type: Sequelize.INTEGER
        },
        isbn: {
          type: Sequelize.STRING
        },
        tipo: {
          type: Sequelize.STRING
        },
        categoria: {
          type: Sequelize.STRING
        },
        idioma: {
          type: Sequelize.STRING
        },
        localizacao: {
          type: Sequelize.STRING
        },
        status: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('acervos');
  }
};