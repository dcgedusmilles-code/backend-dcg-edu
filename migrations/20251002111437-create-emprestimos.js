'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('emprestimos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_exemplar: {
          type: Sequelize.INTEGER
        },
        id_usuario: {
          type: Sequelize.INTEGER
        },
        data_emprestimo: {
          type: Sequelize.DATE
        },
        data_prevista_devolucao: {
          type: Sequelize.DATE
        },
        data_devolucao: {
          type: Sequelize.DATE
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
    await queryInterface.dropTable('emprestimos');
  }
};