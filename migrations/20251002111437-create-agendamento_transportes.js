'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('agendamento_transportes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_transporte: {
          type: Sequelize.INTEGER
        },
        finalidade: {
          type: Sequelize.STRING
        },
        motorista: {
          type: Sequelize.INTEGER
        },
        origem: {
          type: Sequelize.STRING
        },
        destino: {
          type: Sequelize.STRING
        },
        data_saida: {
          type: Sequelize.DATE
        },
        data_retorno: {
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
    await queryInterface.dropTable('agendamento_transportes');
  }
};