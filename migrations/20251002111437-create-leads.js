'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('leads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        nome: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        telefone: {
          type: Sequelize.STRING
        },
        origem: {
          type: Sequelize.STRING
        },
        interesse: {
          type: Sequelize.STRING
        },
        status: {
          type: Sequelize.STRING
        },
        data_criacao: {
          type: Sequelize.DATE
        },
        data_atualizacao: {
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
    await queryInterface.dropTable('leads');
  }
};