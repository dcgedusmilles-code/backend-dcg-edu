'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avaliacao extends Model {
    static associate(models) {
      Avaliacao.belongsTo(models.Curso, { foreignKey: 'curso_id', as: 'curso' });
      Avaliacao.belongsTo(models.Turma, { foreignKey: 'turma_id', as: 'turma' });
      Avaliacao.belongsTo(models.Instrutor, { foreignKey: 'instrutor_id', as: 'instrutor' });
      Avaliacao.hasMany(models.ResultadoAvaliacao, { foreignKey: 'avaliacao_id', as: 'resultados' });
    }
  }
  Avaliacao.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    data: DataTypes.DATE,
    curso_id: DataTypes.INTEGER,
    turma_id: DataTypes.INTEGER,
    instrutor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Avaliacao',
    tableName: 'assessments',
    timestamps: true
  });
  return Avaliacao;
};
