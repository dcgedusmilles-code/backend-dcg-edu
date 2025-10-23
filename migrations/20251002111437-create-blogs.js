'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('blogs', {
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
      slug: {
        type: Sequelize.STRING,
        unique: true
      },
      conteudo: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      resumo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      tags: {
        type: Sequelize.JSON, // ✅ use JSON no MySQL
        allowNull: true
      },
      imagem_capa: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM('rascunho', 'publicado', 'arquivado'),
        defaultValue: 'rascunho'
      },
      publicado_em: {
        type: Sequelize.DATE,
        allowNull: true
      },
      autor_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'funcionarios',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'blogcategories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    await queryInterface.dropTable('blogs');
  }
};
