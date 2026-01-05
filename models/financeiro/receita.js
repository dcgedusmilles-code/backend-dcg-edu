"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Receita extends Model {
    static associate(models) {
      // FK aluno
      Receita.belongsTo(models.Aluno, {
        foreignKey: "aluno_id",
        as: "aluno",
      });

      // FK curso
      Receita.belongsTo(models.Curso, {
        foreignKey: "curso_id",
        as: "curso",
      });

      // FK mensalidade
      Receita.belongsTo(models.Mensalidade, {
        foreignKey: "mensalidade_id",
        as: "mensalidade",
      });

      // FK material didático
      Receita.belongsTo(models.MaterialDidatico, {
        foreignKey: "material_id",
        as: "material",
      });

      // FK turma
      Receita.belongsTo(models.Turma, {
        foreignKey: "turma_id",
        as: "turma",
      });

      // FK unidade
      Receita.belongsTo(models.Unidade, {
        foreignKey: "unidade_id",
        as: "unidade",
      });

      // FK usuário responsável
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

      mensalidade_id: DataTypes.INTEGER,
      material_id: DataTypes.INTEGER,
      responsavel_id: DataTypes.INTEGER,
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
