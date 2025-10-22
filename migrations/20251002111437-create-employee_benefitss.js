'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employee_benefitss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        funcionario_id: {
          type: Sequelize.INTEGER
        },
        beneficio_id: {
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
    await queryInterface.dropTable('employee_benefitss');
  }
};