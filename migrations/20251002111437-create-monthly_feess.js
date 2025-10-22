'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('monthly_feess', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        aluno_id: {
          type: Sequelize.INTEGER
        },
        curso_id: {
          type: Sequelize.INTEGER
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
    await queryInterface.dropTable('monthly_feess');
  }
};