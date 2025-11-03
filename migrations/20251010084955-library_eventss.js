'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    // Cria a tabela sem FK inicialmente
    await queryInterface.createTable('library_eventss', {
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
      descricao: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: true // Ex: palestra, workshop, feira, exposição
      },
      data_inicio: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_fim: {
        type: Sequelize.DATE,
        allowNull: false
      },
      publico_alvo: {
        type: Sequelize.STRING,
        allowNull: true // Ex: estudantes, professores, comunidade
      },
      responsavel: {
        type: Sequelize.INTEGER,
        allowNull: true // FK adicionada depois
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    // Índice para buscas rápidas
    await queryInterface.addIndex('library_eventss', ['responsavel']);
  },

  async down(queryInterface) {
    await queryInterface.removeIndex('library_eventss', ['responsavel']);
    await queryInterface.dropTable('library_eventss');
  }
};
