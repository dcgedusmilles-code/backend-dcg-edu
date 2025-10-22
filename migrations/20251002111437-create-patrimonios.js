'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patrimonios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        nome_item: {
          type: Sequelize.STRING
        },
        descricao: {
          type: Sequelize.TEXT
        },
        numero_tombo: {
          type: Sequelize.STRING
        },
        categoria: {
          type: Sequelize.STRING
        },
        data_aquisicao: {
          type: Sequelize.DATE
        },
        valor_aquisicao: {
          type: Sequelize.FLOAT
        },
        estado: {
          type: Sequelize.STRING
        },
        localizacao: {
          type: Sequelize.INTEGER
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
    await queryInterface.dropTable('patrimonios');
  }
};