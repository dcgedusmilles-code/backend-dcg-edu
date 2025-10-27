'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    // Cria a tabela principal sem FK inicialmente
    await queryInterface.createTable('evaluations_internships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_estagio: {
        type: Sequelize.INTEGER,
        allowNull: true // FK adicionada depois
      },
      avaliador: {
        type: Sequelize.STRING,
        allowNull: false
      },
      desempenho: {
        type: Sequelize.STRING,
        allowNull: true
      },
      competencias_desenvolvidas: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      pontos_fortes: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      pontos_a_melhorar: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      data_avaliacao: {
        type: Sequelize.DATE,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    // Índice opcional para otimizar busca por estágio
    await queryInterface.addIndex('evaluations_internships', ['id_estagio']);
  },

  async down(queryInterface) {
    await queryInterface.removeIndex('evaluations_internships', ['id_estagio']);
    await queryInterface.dropTable('evaluations_internships');
  }
};
