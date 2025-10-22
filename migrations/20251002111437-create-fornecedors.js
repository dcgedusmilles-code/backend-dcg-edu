'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fornecedors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        nome: {
          type: Sequelize.STRING
        },
        tipo: {
          type: Sequelize.STRING
        },
        telefone: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        endereco: {
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
    await queryInterface.dropTable('fornecedors');
  }
};