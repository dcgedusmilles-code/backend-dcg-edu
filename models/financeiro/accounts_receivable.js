'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ContaReceber extends Model {
    static associate(models) {
      // A conta a receber pertence a um aluno
      ContaReceber.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' });

      // A conta a receber pertence a uma mensalidade
      ContaReceber.belongsTo(models.Mensalidade, { foreignKey: 'mensalidade_id', as: 'mensalidade' });
    }
  }

  ContaReceber.init({
    aluno_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mensalidade_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    descricao: DataTypes.STRING,

    valor_original: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    valor_pago: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },

    valor_em_divida: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    data_vencimento: DataTypes.DATE,
    data_pagamento: DataTypes.DATE,

    status: {
      type: DataTypes.ENUM('pendente', 'pago', 'atrasado', 'cancelado'),
      defaultValue: 'pendente'
    },

    origem: {
      type: DataTypes.STRING,
      defaultValue: 'mensalidade'
    }
  }, {
    sequelize,
    modelName: 'ContaReceber',
    tableName: 'accounts_receivables',
    timestamps: true
  });

  return ContaReceber;
};
