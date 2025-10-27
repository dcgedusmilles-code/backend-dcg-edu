'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    // Criação da tabela sem FKs inicialmente
    await queryInterface.createTable('student_servicess', {
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
      tipo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      data_atendimento: {
        type: Sequelize.DATE,
        allowNull: true
      },
      responsavel: {
        type: Sequelize.INTEGER,
        allowNull: true // FK adicionada depois
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'pendente'
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

    // Índices para consultas rápidas
    await queryInterface.addIndex('student_servicess', ['id_estudante']);
    await queryInterface.addIndex('student_servicess', ['responsavel']);
  },

  async down(queryInterface) {
    await queryInterface.removeIndex('student_servicess', ['id_estudante']);
    await queryInterface.removeIndex('student_servicess', ['responsavel']);
    await queryInterface.dropTable('student_servicess');
  }
};
