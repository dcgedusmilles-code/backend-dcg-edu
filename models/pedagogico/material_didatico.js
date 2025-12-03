"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class MaterialDidatico extends Model {
    static associate(models) {
      MaterialDidatico.belongsTo(models.Unidade, {
        foreignKey: "unidade_id",
        as: "unidade",
      });

      MaterialDidatico.belongsTo(models.Preco, {
        foreignKey: "preco_id",
        as: "preco",
      });

      MaterialDidatico.belongsTo(models.Curso, {
        foreignKey: "curso_id",
        as: "curso",
      });
    }
  }

  MaterialDidatico.init(
    {
      titulo: DataTypes.STRING,
      descricao: DataTypes.TEXT,
      nivel: DataTypes.ENUM("iniciante", "elementar", "intermedio", "avancado"),
      tipo: DataTypes.STRING,
      autor: DataTypes.STRING,
      editora: DataTypes.STRING,
      idioma: DataTypes.STRING,
      ano_publicacao: DataTypes.INTEGER,
      url_download: DataTypes.STRING,
      unidade_id: DataTypes.INTEGER,
      preco_id: DataTypes.INTEGER,
      curso_id: DataTypes.INTEGER,
      ativo: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      tableName: "materiais_didaticos",
      modelName: "MaterialDidatico",
    }
  );

  return MaterialDidatico;
};
