"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ContaReceber extends Model {
    static associate(models) {}
  }
  ContaReceber.init(
    {
      descricao: DataTypes.STRING,
      cliente_id: DataTypes.INTEGER,
      valor: DataTypes.DECIMAL(14, 2),
      data_vencimento: DataTypes.DATEONLY,
      data_pagamento: DataTypes.DATEONLY,
      status: DataTypes.ENUM("pendente", "pago", "vencido"),
      unidade_id: DataTypes.INTEGER,
      curso_id: DataTypes.INTEGER,
      parcela: DataTypes.INTEGER,
      total_parcelas: DataTypes.INTEGER,
      observacoes: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "ContaReceber",
      tableName: "contas_receber",
      underscored: true,
      timestamps: true,
    }
  );
  return ContaReceber;
};
