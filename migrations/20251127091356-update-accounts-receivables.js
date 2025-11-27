'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    // REMOVE colunas antigas se existirem
    const table = await queryInterface.describeTable('accounts_receivables');

    if (table.valor) {
      await queryInterface.removeColumn('accounts_receivables', 'valor');
    }

    if (table.data_recebimento) {
      await queryInterface.removeColumn('accounts_receivables', 'data_recebimento');
    }

    if (table.status && table.status.type !== 'ENUM') {
      await queryInterface.removeColumn('accounts_receivables', 'status');
    }


    // ======================
    // ADICIONA AS COLUNAS NOVAS
    // ======================

    if (!table.aluno_id) {
      await queryInterface.addColumn('accounts_receivables', 'aluno_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'studentss', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
    }

    if (!table.mensalidade_id) {
      await queryInterface.addColumn('accounts_receivables', 'mensalidade_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'monthly_feess', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
    }

    if (!table.valor_original) {
      await queryInterface.addColumn('accounts_receivables', 'valor_original', {
        type: Sequelize.FLOAT,
        allowNull: false
      });
    }

    if (!table.valor_pago) {
      await queryInterface.addColumn('accounts_receivables', 'valor_pago', {
        type: Sequelize.FLOAT,
        defaultValue: 0
      });
    }

    if (!table.valor_em_divida) {
      await queryInterface.addColumn('accounts_receivables', 'valor_em_divida', {
        type: Sequelize.FLOAT,
        allowNull: false
      });
    }

    if (!table.data_vencimento) {
      await queryInterface.addColumn('accounts_receivables', 'data_vencimento', {
        type: Sequelize.DATE
      });
    }

    if (!table.data_pagamento) {
      await queryInterface.addColumn('accounts_receivables', 'data_pagamento', {
        type: Sequelize.DATE
      });
    }

    if (!table.status) {
      await queryInterface.addColumn('accounts_receivables', 'status', {
        type: Sequelize.ENUM('pendente', 'pago', 'atrasado', 'cancelado'),
        defaultValue: 'pendente'
      });
    }

    if (!table.origem) {
      await queryInterface.addColumn('accounts_receivables', 'origem', {
        type: Sequelize.STRING,
        defaultValue: 'mensalidade'
      });
    }
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('accounts_receivables', 'aluno_id');
    await queryInterface.removeColumn('accounts_receivables', 'mensalidade_id');
    await queryInterface.removeColumn('accounts_receivables', 'valor_original');
    await queryInterface.removeColumn('accounts_receivables', 'valor_pago');
    await queryInterface.removeColumn('accounts_receivables', 'valor_em_divida');
    await queryInterface.removeColumn('accounts_receivables', 'data_vencimento');
    await queryInterface.removeColumn('accounts_receivables', 'data_pagamento');
    await queryInterface.removeColumn('accounts_receivables', 'status');
    await queryInterface.removeColumn('accounts_receivables', 'origem');
  }
};
