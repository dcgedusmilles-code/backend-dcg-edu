"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ContaPagar extends Model {
    static associate(models) {}
  }
  ContaPagar.init(
    {
      descricao: DataTypes.STRING,
      fornecedor: DataTypes.STRING,
      valor: DataTypes.DECIMAL(14, 2),
      data_vencimento: DataTypes.DATEONLY,
      data_pagamento: DataTypes.DATEONLY,
      status: DataTypes.ENUM("pendente", "pago", "vencido"),
      unidade_id: DataTypes.INTEGER,
      categoria: DataTypes.STRING,
      observacoes: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "ContaPagar",
      tableName: "contas_pagar",
      underscored: true,
      timestamps: true,
    }
  );
  return ContaPagar;
};
