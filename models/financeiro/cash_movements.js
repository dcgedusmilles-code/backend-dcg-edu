"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CaixaMovimento extends Model {
    static associate(models) {
      Receita.belongsTo(models.User, {
        foreignKey: "responsavel_id",
        as: "responsavel",
      });
    }
  }
  CaixaMovimento.init(
    {
      tipo: DataTypes.STRING,
      descricao: DataTypes.STRING,
      valor: DataTypes.FLOAT,
      data_movimento: DataTypes.DATE,
      responsavel_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CaixaMovimento",
      tableName: "cash_movementss",
      timestamps: true,
    }
  );
  return CaixaMovimento;
};
