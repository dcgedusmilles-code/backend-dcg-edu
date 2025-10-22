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
  PlanoDeAula.init({
    titulo: DataTypes.STRING,
    objetivos: DataTypes.TEXT,
    conteudo: DataTypes.TEXT,
    metodologia: DataTypes.TEXT,
    avaliacao: DataTypes.TEXT,
    disciplina_id: DataTypes.INTEGER,
    professor_id: DataTypes.INTEGER,
    turma_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PlanoDeAula',
    tableName: 'lesson_plans',
    timestamps: true,
    
  });
  return PlanoDeAula;
};
