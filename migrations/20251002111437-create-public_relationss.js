'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('public_relationss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        nome_contato: {
          type: Sequelize.STRING
        },
        instituicao: {
          type: Sequelize.STRING
        },
        cargo: {
          type: Sequelize.STRING
        },
        telefone: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        observacoes: {
          type: Sequelize.TEXT
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
    await queryInterface.dropTable('public_relationss');
  }
};