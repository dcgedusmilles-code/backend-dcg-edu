'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payrolls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        funcionario_id: {
          type: Sequelize.INTEGER
        },
        referencia_mes: {
          type: Sequelize.STRING
        },
        salario_base: {
          type: Sequelize.FLOAT
        },
        horas_extras: {
          type: Sequelize.FLOAT
        },
        descontos: {
          type: Sequelize.FLOAT
        },
        beneficios: {
          type: Sequelize.FLOAT
        },
        valor_liquido: {
          type: Sequelize.FLOAT
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
    await queryInterface.dropTable('payrolls');
  }
};