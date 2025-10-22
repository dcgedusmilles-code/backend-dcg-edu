'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('programa_carreiras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        nome: {
          type: Sequelize.STRING
        },
        descricao: {
          type: Sequelize.TEXT
        },
        tipo: {
          type: Sequelize.STRING
        },
        parceiro: {
          type: Sequelize.INTEGER
        },
        data_inicio: {
          type: Sequelize.DATE
        },
        data_fim: {
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
    await queryInterface.dropTable('programa_carreiras');
  }
};