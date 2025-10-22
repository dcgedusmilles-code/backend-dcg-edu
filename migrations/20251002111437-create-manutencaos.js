'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('manutencaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_patrimonio: {
          type: Sequelize.INTEGER
        },
        tipo: {
          type: Sequelize.STRING
        },
        descricao_servico: {
          type: Sequelize.TEXT
        },
        fornecedor: {
          type: Sequelize.INTEGER
        },
        custo_estimado: {
          type: Sequelize.FLOAT
        },
        custo_real: {
          type: Sequelize.FLOAT
        },
        data_agendada: {
          type: Sequelize.DATE
        },
        data_execucao: {
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
    await queryInterface.dropTable('manutencaos');
  }
};