'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ex_alunos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_estudante: {
          type: Sequelize.INTEGER
        },
        empresa_atual: {
          type: Sequelize.STRING
        },
        cargo_atual: {
          type: Sequelize.STRING
        },
        data_inicio: {
          type: Sequelize.DATE
        },
        status_emprego: {
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
    await queryInterface.dropTable('ex_alunos');
  }
};