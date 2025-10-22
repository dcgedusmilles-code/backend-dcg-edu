'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sugestao_aquisicaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_usuario: {
          type: Sequelize.INTEGER
        },
        titulo_sugerido: {
          type: Sequelize.STRING
        },
        autor: {
          type: Sequelize.STRING
        },
        tipo: {
          type: Sequelize.STRING
        },
        justificativa: {
          type: Sequelize.TEXT
        },
        data_sugestao: {
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
    await queryInterface.dropTable('sugestao_aquisicaos');
  }
};