'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    // Cria a tabela primeiro, sem FKs
    await queryInterface.createTable('student_in_charges', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true // FK será adicionada depois
      },
      encarregado_id: {
        type: Sequelize.INTEGER,
        allowNull: true // FK será adicionada depois
      },
      tipo_responsabilidade: {
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

    // Índices para performance em joins
    await queryInterface.addIndex('student_in_charges', ['aluno_id']);
    await queryInterface.addIndex('student_in_charges', ['encarregado_id']);
  },

  async down(queryInterface) {
    await queryInterface.removeIndex('student_in_charges', ['aluno_id']);
    await queryInterface.removeIndex('student_in_charges', ['encarregado_id']);
    await queryInterface.dropTable('student_in_charges');
  }
};
