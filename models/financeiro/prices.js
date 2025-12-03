"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Preco extends Model {
    static associate(models) {
      Preco.belongsTo(models.Curso, { foreignKey: "curso_id", as: "curso" });
      Preco.belongsTo(models.MaterialDidatico, { foreignKey: "material_id", as: "material" });
      Preco.belongsTo(models.Unidade, {
        foreignKey: "unidade_id",
        as: "unidade",
      });
    }
  }
  Preco.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      curso_id: { type: DataTypes.INTEGER, allowNull: false },
      unidade_id: { type: DataTypes.INTEGER, allowNull: false },
      material_id: { type: DataTypes.INTEGER, allowNull: false },
      preco_incricao: { type: DataTypes.DECIMAL(12, 2) },
      preco_individual: { type: DataTypes.DECIMAL(12, 2), allowNull: false },
      preco_para_2: { type: DataTypes.DECIMAL(12, 2) },
      preco_para_3_ou_mais: { type: DataTypes.DECIMAL(12, 2) },
      desconto_percentual: { type: DataTypes.DECIMAL(5, 2) },
      moeda: {
        type: DataTypes.STRING(6),
        allowNull: false,
        defaultValue: "AOA",
      },
      valido_de: { type: DataTypes.DATEONLY },
      valido_ate: { type: DataTypes.DATEONLY },
      observacoes: { type: DataTypes.TEXT },
      ativo: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
    },
    {
      sequelize,
      modelName: "Preco",
      tableName: "precos",
      underscored: true,
      timestamps: true,
    }
  );
  return Preco;
};
