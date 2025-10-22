'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('it_assetss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        tipo: {
          type: Sequelize.STRING
        },
        descricao: {
          type: Sequelize.TEXT
        },
        patrimonio: {
          type: Sequelize.STRING
        },
        data_aquisicao: {
          type: Sequelize.DATE
        },
        estado: {
          type: Sequelize.STRING
        },
        localizacao: {
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
    await queryInterface.dropTable('it_assetss');
  }
};