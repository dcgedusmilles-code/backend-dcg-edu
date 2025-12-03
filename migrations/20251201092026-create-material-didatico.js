'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('materiais_didaticos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      descricao: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      nivel: {
        type: Sequelize.ENUM('iniciante', 'elementar', 'intermedio', 'avancado'),
        allowNull: false,
      },

      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      autor: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      editora: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      idioma: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'pt',
      },

      ano_publicacao: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      url_download: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      unidade_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'units', key: 'id' },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },

      curso_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'coursess', key: 'id' },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      preco_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'precos', key: 'id' },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },

      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('materiais_didaticos');
  },
};
