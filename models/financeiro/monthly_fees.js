'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mensalidade extends Model {
    static associate(models) {
      Mensalidade.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' });
      Mensalidade.belongsTo(models.Curso, { foreignKey: 'curso_id', as: 'curso' });
      Mensalidade.belongsTo(models.Turma, { foreignKey: 'turma_id', as: 'turma' });

      // cada mensalidade tem uma conta a receber
      Mensalidade.hasOne(models.ContaReceber, { foreignKey: 'mensalidade_id', as: 'conta' });
    }
  }

  Mensalidade.init({
    aluno_id: DataTypes.INTEGER,
    curso_id: DataTypes.INTEGER,
    turma_id: DataTypes.INTEGER,

    mes_referencia: {
      type: DataTypes.INTEGER, // 1 a 12
      allowNull: false
    },

    ano_referencia: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    valor: DataTypes.FLOAT,
    data_vencimento: DataTypes.DATE,
    data_pagamento: DataTypes.DATE,

    forma_pagamento: DataTypes.STRING,

    status: {
      type: DataTypes.ENUM('pendente', 'pago', 'atrasado'),
      defaultValue: 'pendente'
    }
  }, {
    sequelize,
    modelName: 'Mensalidade',
    tableName: 'monthly_feess',
    timestamps: true
  });

  return Mensalidade;
};
