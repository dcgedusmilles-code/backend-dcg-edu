'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('avaliacao_estagios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_estagio: {
          type: Sequelize.INTEGER
        },
        avaliador: {
          type: Sequelize.STRING
        },
        desempenho: {
          type: Sequelize.STRING
        },
        competencias_desenvolvidas: {
          type: Sequelize.TEXT
        },
        pontos_fortes: {
          type: Sequelize.TEXT
        },
        pontos_a_melhorar: {
          type: Sequelize.TEXT
        },
        data_avaliacao: {
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
    await queryInterface.dropTable('avaliacao_estagios');
  }
};