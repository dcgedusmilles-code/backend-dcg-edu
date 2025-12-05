"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Receita extends Model {
    static associate(models) {
      Receita.belongsTo(models.Aluno, {
        foreignKey: "aluno_id",
        as: "aluno",
      });
      Receita.belongsTo(models.curso, {
        foreignKey: "curso_id",
        as: "curso",
      });
      Receita.belongsTo(models.Mensalidade, {
        foreignKey: "mensalidade_id",
        as: "curso",
      });
      Receita.hasMany(models.MaterialDidatico, {
        foreignKey: "material_id",
        as: "material",
      });
      Receita.belongsTo(models.Turma, {
        foreignKey: "turma_id",
        as: "turma",
      });
      Receita.belongsTo(models.Unidade, {
        foreignKey: "unidade_id",
        as: "unidade",
      });
      Receita.belongsTo(models.User, {
        foreignKey: "responsavel_id",
        as: "responsavel",
      });
    }
  }
  Receita.init(
    {
      descricao: DataTypes.STRING,
      categoria: DataTypes.ENUM("mensalidade", "material_didatico", "outros"),
      valor: DataTypes.DECIMAL(14, 2),
      data_recebimento: DataTypes.DATEONLY,
      status: DataTypes.ENUM("pago", "pendente", "parcial"),
      aluno_id: DataTypes.INTEGER,
      unidade_id: DataTypes.INTEGER,
      curso_id: DataTypes.INTEGER,
      turma_id: DataTypes.INTEGER,
      metodo_pagamento: DataTypes.STRING,
      comprovante_url: DataTypes.STRING,
      mensalidade_id: DataTypes.INTEGER, // FK opcional
      material_id: DataTypes.INTEGER, // FK opcional
      responsavel_id: DataTypes.INTEGER, // FK opcional
    },
    {
      sequelize,
      modelName: "Receita",
      tableName: "receitas",
      underscored: true,
      timestamps: true,
    }
  );
  return Receita;
};
