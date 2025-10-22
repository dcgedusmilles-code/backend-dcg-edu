'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('performance_evaluationss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        funcionario_id: {
          type: Sequelize.INTEGER
        },
        periodo: {
          type: Sequelize.STRING
        },
        nota: {
          type: Sequelize.FLOAT
        },
        feedback: {
          type: Sequelize.TEXT
        },
        avaliador: {
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
    await queryInterface.dropTable('performance_evaluationss');
  }
};