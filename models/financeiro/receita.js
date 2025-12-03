'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receita extends Model {
    static associate(models) {
      // defina associações se precisar
    }
  }
  Receita.init({
    descricao: DataTypes.STRING,
    categoria: DataTypes.STRING,
    valor: DataTypes.DECIMAL(14,2),
    data_recebimento: DataTypes.DATEONLY,
    status: DataTypes.ENUM('pago','pendente','parcial'),
    cliente_id: DataTypes.INTEGER,
    unidade_id: DataTypes.INTEGER,
    curso_id: DataTypes.INTEGER,
    metodo_pagamento: DataTypes.STRING,
    comprovante_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Receita',
    tableName: 'receitas',
    underscored: true,
    timestamps: true
  });
  return Receita;
};
