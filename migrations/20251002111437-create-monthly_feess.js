'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('monthly_feess', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'studentss', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      curso_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'cursos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },

      turma_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'classes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },

      mes_referencia: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      ano_referencia: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      valor: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      data_vencimento: {
        type: Sequelize.DATE
      },

      data_pagamento: {
        type: Sequelize.DATE
      },

      forma_pagamento: {
        type: Sequelize.STRING
      },

      status: {
        type: Sequelize.ENUM('pendente', 'pago', 'atrasado'),
        defaultValue: 'pendente'
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

  async down(queryInterface) {
    await queryInterface.dropTable('monthly_feess');
  }
};
