'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Cria a tabela SEM as chaves estrangeiras
    await queryInterface.createTable('appointments_transportations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_transporte: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      finalidade: {
        type: Sequelize.STRING,
        allowNull: true
      },
      motorista: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      origem: {
        type: Sequelize.STRING,
        allowNull: true
      },
      destino: {
        type: Sequelize.STRING,
        allowNull: true
      },
      data_saida: {
        type: Sequelize.DATE,
        allowNull: true
      },
      data_retorno: {
        type: Sequelize.DATE,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('appointments_transportations');
  }
};
