'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turma extends Model {
    static associate(models) {
      Turma.belongsTo(models.Curso, { foreignKey: 'curso_id', as: 'curso' });
      Turma.belongsTo(models.Coordenador, { foreignKey: 'coordenador_id', as: 'coordenador' });
      Turma.hasMany(models.PlanoDeAula, { foreignKey: 'turma_id', as: 'planos' });
      Turma.hasMany(models.Aula, { foreignKey: 'turma_id', as: 'aulas' });
      Turma.hasMany(models.Avaliacao, { foreignKey: 'turma_id', as: 'avaliacoes' });
    }
  }
  Turma.init({
    nome: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    semestre: DataTypes.INTEGER,
    curso_id: DataTypes.INTEGER,
    coordenador_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Turma',
    tableName: 'class_teachers',
    timestamps: true,
    underscored: true
  });
  return Turma;
};
