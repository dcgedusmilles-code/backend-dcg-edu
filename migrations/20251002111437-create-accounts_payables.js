'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('accounts_payables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        fornecedor_id: {
          type: Sequelize.INTEGER
        },
        descricao: {
          type: Sequelize.STRING
        },
        valor: {
          type: Sequelize.FLOAT
        },
        data_vencimento: {
          type: Sequelize.DATE
        },
        data_pagamento: {
          type: Sequelize.DATE
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
    await queryInterface.dropTable('accounts_payables');
  }
};