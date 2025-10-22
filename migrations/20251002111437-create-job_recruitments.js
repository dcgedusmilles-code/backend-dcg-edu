'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('job_recruitments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        titulo: {
          type: Sequelize.STRING
        },
        descricao: {
          type: Sequelize.TEXT
        },
        requisitos: {
          type: Sequelize.TEXT
        },
        salario_proposto: {
          type: Sequelize.FLOAT
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
    await queryInterface.dropTable('job_recruitments');
  }
};