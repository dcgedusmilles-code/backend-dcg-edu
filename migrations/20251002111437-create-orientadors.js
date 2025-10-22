'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orientadors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        nome: {
          type: Sequelize.STRING
        },
        especialidade: {
          type: Sequelize.STRING
        },
        telefone: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        disponibilidade: {
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
    await queryInterface.dropTable('orientadors');
  }
};