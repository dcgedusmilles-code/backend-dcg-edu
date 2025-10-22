'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lesson_plans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        titulo: {
          type: Sequelize.STRING
        },
        objetivos: {
          type: Sequelize.TEXT
        },
        conteudo: {
          type: Sequelize.TEXT
        },
        metodologia: {
          type: Sequelize.TEXT
        },
        avaliacao: {
          type: Sequelize.TEXT
        },
        disciplina_id: {
          type: Sequelize.INTEGER
        },
        professor_id: {
          type: Sequelize.INTEGER
        },
        turma_id: {
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
    await queryInterface.dropTable('lesson_plans');
  }
};