'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('seguranca_patrimonials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        tipo: {
          type: Sequelize.STRING
        },
        descricao: {
          type: Sequelize.TEXT
        },
        local: {
          type: Sequelize.INTEGER
        },
        data_registro: {
          type: Sequelize.DATE
        },
        responsavel: {
          type: Sequelize.INTEGER
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
    await queryInterface.dropTable('seguranca_patrimonials');
  }
};