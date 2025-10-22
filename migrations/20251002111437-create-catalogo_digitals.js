'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('catalogo_digitals', {
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
        tipo: {
          type: Sequelize.STRING
        },
        url_acesso: {
          type: Sequelize.STRING
        },
        licenca: {
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
    await queryInterface.dropTable('catalogo_digitals');
  }
};