'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PlanoDeAula extends Model {
    static associate(models) {
      PlanoDeAula.belongsTo(models.Disciplina, { foreignKey: 'disciplina_id', as: 'disciplina' });
      PlanoDeAula.belongsTo(models.Professor, { foreignKey: 'professor_id', as: 'professor' });
      PlanoDeAula.belongsTo(models.Turma, { foreignKey: 'turma_id', as: 'turma' });
    }
  }

  PlanoDeAula.init(
    {
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      objetivos: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      conteudo: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      metodologia: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      avaliacao: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      disciplina_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'discipliness', // ou 'disciplinas' dependendo do nome da tabela
          key: 'id',
        },
        allowNull: false,
      },
      professor_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'teacherss',
          key: 'id',
        },
        allowNull: false,
      },
      turma_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'turmas',
          key: 'id',
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'PlanoDeAula',
      tableName: 'lesson_plans',
      timestamps: true,
    }
  );

  return PlanoDeAula;
};
