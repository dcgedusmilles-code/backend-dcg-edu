'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('collections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      autor: {
        type: Sequelize.STRING,
        allowNull: true
      },
      editora: {
        type: Sequelize.STRING,
        allowNull: true
      },
      ano_publicacao: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      isbn: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: true // Ex: livro, revista, artigo, etc.
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: true
      },
      idioma: {
        type: Sequelize.STRING,
        allowNull: true
      },
      localizacao: {
        type: Sequelize.STRING,
        allowNull: true // Ex: estante, prateleira, etc.
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true // Ex: ativo, inativo, em revisão, etc.
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
    await queryInterface.dropTable('collections');
  }
};

