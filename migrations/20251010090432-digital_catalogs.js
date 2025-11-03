'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('digital_catalogs', {
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
      tipo: {
        type: Sequelize.STRING,
        allowNull: true // Ex: livro, artigo, vídeo, áudio, etc.
      },
      url_acesso: {
        type: Sequelize.STRING,
        allowNull: false
      },
      licenca: {
        type: Sequelize.STRING,
        allowNull: true // Ex: Creative Commons, Domínio Público, etc.
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true // Ex: ativo, inativo, em revisão, etc.
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('digital_catalogs');
  }
};

