'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aula extends Model {
    static associate(models) {
      Aula.belongsTo(models.Disciplina, { foreignKey: 'disciplina_id', as: 'disciplina' });
      Aula.belongsTo(models.Professor, { foreignKey: 'professor_id', as: 'professor' });
      Aula.belongsTo(models.Turma, { foreignKey: 'turma_id', as: 'turma' });
    }
  }
  Aula.init({
    data: DataTypes.DATE,
    hora_inicio: DataTypes.TIME,
    hora_fim: DataTypes.TIME,
    conteudo_previsto: DataTypes.TEXT,
    disciplina_id: DataTypes.INTEGER,
    professor_id: DataTypes.INTEGER,
    turma_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Aula',
    tableName: 'classrooms',
    timestamps: true,
    underscored: true
  });
  return Aula;
};
