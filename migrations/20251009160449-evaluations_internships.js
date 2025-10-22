'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('evaluations_internships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_estagio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'internships', // Nome da tabela associada à model Estagio (ajuste se for diferente)
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('evaluations_internships');
  }
};

