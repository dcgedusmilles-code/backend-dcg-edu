'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('accounts_receivables', {
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

      mensalidade_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'monthly_feess', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      descricao: {
        type: Sequelize.STRING
      },

      valor_original: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      valor_pago: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },

      valor_em_divida: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      data_vencimento: {
        type: Sequelize.DATE
      },

      data_pagamento: {
        type: Sequelize.DATE
      },

      status: {
        type: Sequelize.ENUM('pendente', 'pago', 'atrasado', 'cancelado'),
        defaultValue: 'pendente'
      },

      origem: {
        type: Sequelize.STRING,
        defaultValue: 'mensalidade'
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
    await queryInterface.dropTable('accounts_receivables');
  }
};
