'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('course_registrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        matricula_id: {
          type: Sequelize.INTEGER
        },
        disciplina_id: {
          type: Sequelize.INTEGER
        },
        semestre: {
          type: Sequelize.STRING
        },
        ano: {
          type: Sequelize.INTEGER
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
    await queryInterface.dropTable('course_registrations');
  }
};