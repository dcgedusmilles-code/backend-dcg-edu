'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    // Cria a tabela sem as FKs inicialmente
    await queryInterface.createTable('loanss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_exemplar: {
        type: Sequelize.INTEGER,
        allowNull: true // FK adicionada depois
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: true // FK adicionada depois
      },
      data_emprestimo: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      data_prevista_devolucao: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_devolucao: {
        type: Sequelize.DATE,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'ativo' // Ex: ativo, devolvido, atrasado
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('loanss');
  }
};
