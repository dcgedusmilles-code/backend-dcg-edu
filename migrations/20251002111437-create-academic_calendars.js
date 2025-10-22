'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('academic_calendars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        ano_letivo: {
          type: Sequelize.INTEGER
        },
        semestre: {
          type: Sequelize.INTEGER
        },
        data_inicio: {
          type: Sequelize.DATE
        },
        data_fim: {
          type: Sequelize.DATE
        },
        feriados: {
          type: Sequelize.JSON
        },
        eventos_academicos: {
          type: Sequelize.JSON
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
    await queryInterface.dropTable('academic_calendars');
  }
};