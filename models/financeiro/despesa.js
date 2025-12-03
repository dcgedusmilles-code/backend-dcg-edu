"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Despesa extends Model {
    static associate(models) {}
  }
  Despesa.init(
    {
      descricao: DataTypes.STRING,
      categoria: DataTypes.STRING,
      valor: DataTypes.DECIMAL(14, 2),
      data_pagamento: DataTypes.DATEONLY,
      status: DataTypes.ENUM("pago", "pendente", "atrasado"),
      fornecedor: DataTypes.STRING,
      unidade_id: DataTypes.INTEGER,
      metodo_pagamento: DataTypes.STRING,
      comprovante_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Despesa",
      tableName: "despesas",
      underscored: true,
      timestamps: true,
    }
  );
  return Despesa;
};
