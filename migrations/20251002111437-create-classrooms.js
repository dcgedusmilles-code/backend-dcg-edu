'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('classrooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        data: {
          type: Sequelize.DATE
        },
        hora_inicio: {
          type: Sequelize.STRING
        },
        hora_fim: {
          type: Sequelize.STRING
        },
        conteudo_previsto: {
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
    await queryInterface.dropTable('classrooms');
  }
};