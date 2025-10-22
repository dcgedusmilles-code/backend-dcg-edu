'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('academic_recordss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        aluno_id: {
          type: Sequelize.INTEGER
        },
        disciplina_id: {
          type: Sequelize.INTEGER
        },
        nota_final: {
          type: Sequelize.FLOAT
        },
        frequencia: {
          type: Sequelize.FLOAT
        },
        resultado: {
          type: Sequelize.STRING
        },
        semestre: {
          type: Sequelize.STRING
        },
        ano: {
          type: Sequelize.INTEGER
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
    await queryInterface.dropTable('academic_recordss');
  }
};