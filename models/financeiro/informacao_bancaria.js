"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class InformacaoBancaria extends Model {
    static associate(models) {
      InformacaoBancaria.belongsTo(models.Unidade, {
        foreignKey: "unidade_id",
        as: "unidade",
      });
    }
  }
  InformacaoBancaria.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      unidade_id: { type: DataTypes.INTEGER },
      banco_nome: { type: DataTypes.STRING(150), allowNull: false },
      banco_codigo: { type: DataTypes.STRING(50) },
      agencia: { type: DataTypes.STRING(50) },
      conta: { type: DataTypes.STRING(100), allowNull: false },
      tipo_conta: { type: DataTypes.STRING(50) },
      titular: { type: DataTypes.STRING(200) },
      titular_documento: { type: DataTypes.STRING(100) },
      iban: { type: DataTypes.STRING(60) },
      swift_bic: { type: DataTypes.STRING(50) },
      moeda: {
        type: DataTypes.STRING(6),
        allowNull: false,
        defaultValue: "AOA",
      },
      observacoes: { type: DataTypes.TEXT },
      ativo: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
    },
    {
      sequelize,
      modelName: "InformacaoBancaria",
      tableName: "informacoes_bancarias",
      underscored: true,
      timestamps: true,
    }
  );
  return InformacaoBancaria;
};
