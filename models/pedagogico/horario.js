"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Horario extends Model {
    static associate(models) {
      Horario.belongsTo(models.Curso, { foreignKey: "curso_id", as: "curso" });
      Horario.belongsTo(models.Unidade, {
        foreignKey: "unidade_id",
        as: "unidade",
      });
      Horario.belongsTo(models.Turma, { foreignKey: "turma_id", as: "turma" });
      Horario.belongsTo(models.Professor, {
        foreignKey: "professor_id",
        as: "professor",
      });
    }
  }

  Horario.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      curso_id: { type: DataTypes.INTEGER },
      unidade_id: { type: DataTypes.INTEGER },
      turma_id: { type: DataTypes.INTEGER },
      professor_id: { type: DataTypes.INTEGER },
      dia_semana: {
        type: DataTypes.ENUM(
          "segunda",
          "terca",
          "quarta",
          "quinta",
          "sexta",
          "sabado",
          "domingo"
        ),
        allowNull: false,
      },
      inicio_hora: { type: DataTypes.TIME, allowNull: false },
      fim_hora: { type: DataTypes.TIME, allowNull: false },
      data_inicio: { type: DataTypes.DATEONLY },
      data_fim: { type: DataTypes.DATEONLY },
      sala: { type: DataTypes.STRING(100) },
      recorrente: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      observacoes: { type: DataTypes.TEXT },
      criado_por: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "Horario",
      tableName: "horarios",
      underscored: true,
      timestamps: true,
    }
  );

  return Horario;
};
