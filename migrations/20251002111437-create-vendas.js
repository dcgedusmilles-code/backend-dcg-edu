'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_cliente: {
          type: Sequelize.INTEGER
        },
        id_produto: {
          type: Sequelize.INTEGER
        },
        id_contrato: {
          type: Sequelize.INTEGER
        },
        quantidade: {
          type: Sequelize.INTEGER
        },
        valor_unitario: {
          type: Sequelize.FLOAT
        },
        valor_total: {
          type: Sequelize.FLOAT
        },
        data_venda: {
          type: Sequelize.DATE
        },
        forma_pagamento: {
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
    await queryInterface.dropTable('vendas');
  }
};