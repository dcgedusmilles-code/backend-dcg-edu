'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('empresa_parceiras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        nome: {
          type: Sequelize.STRING
        },
        setor: {
          type: Sequelize.STRING
        },
        endereco: {
          type: Sequelize.STRING
        },
        telefone: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        contato_responsavel: {
          type: Sequelize.STRING
        },
        tipo_parceria: {
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
    await queryInterface.dropTable('empresa_parceiras');
  }
};