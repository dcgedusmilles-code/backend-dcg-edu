'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comissaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_venda: {
          type: Sequelize.INTEGER
        },
        id_funcionario: {
          type: Sequelize.INTEGER
        },
        percentual: {
          type: Sequelize.FLOAT
        },
        valor: {
          type: Sequelize.FLOAT
        },
        status: {
          type: Sequelize.STRING
        },
        data_calculo: {
          type: Sequelize.DATE
        },
        data_pagamento: {
          type: Sequelize.DATE
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
    await queryInterface.dropTable('comissaos');
  }
};