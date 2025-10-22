'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('default_reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        aluno_id: {
          type: Sequelize.INTEGER
        },
        mensalidade_id: {
          type: Sequelize.INTEGER
        },
        dias_atraso: {
          type: Sequelize.INTEGER
        },
        valor_em_aberto: {
          type: Sequelize.FLOAT
        },
        status_negociacao: {
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
    await queryInterface.dropTable('default_reports');
  }
};