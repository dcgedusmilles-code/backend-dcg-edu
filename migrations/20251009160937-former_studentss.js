'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    // Cria a tabela sem a FK inicialmente
    await queryInterface.createTable('former_studentss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_estudante: {
        type: Sequelize.INTEGER,
        allowNull: true // FK adicionada depois
      },
      empresa_atual: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cargo_atual: {
        type: Sequelize.STRING,
        allowNull: true
      },
      data_inicio: {
        type: Sequelize.DATE,
        allowNull: true
      },
      status_emprego: {
        type: Sequelize.STRING,
        allowNull: true
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

    // Índice para otimizar buscas por estudante
    await queryInterface.addIndex('former_studentss', ['id_estudante']);
  },

  async down(queryInterface) {
    await queryInterface.removeIndex('former_studentss', ['id_estudante']);
    await queryInterface.dropTable('former_studentss');
  }
};
