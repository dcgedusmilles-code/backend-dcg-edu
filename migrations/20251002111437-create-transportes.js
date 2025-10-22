'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transportes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        tipo: {
          type: Sequelize.STRING
        },
        placa: {
          type: Sequelize.STRING
        },
        modelo: {
          type: Sequelize.STRING
        },
        capacidade: {
          type: Sequelize.INTEGER
        },
        ano_fabricacao: {
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
    await queryInterface.dropTable('transportes');
  }
};