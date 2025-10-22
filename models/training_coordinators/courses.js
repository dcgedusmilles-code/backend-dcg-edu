'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      Curso.belongsTo(models.CoordenadorTreinamento, { foreignKey: 'coordenador_id', as: 'coordenador' });
      Curso.hasMany(models.Turma, { foreignKey: 'curso_id', as: 'turmas' });
      Curso.hasMany(models.PlanoDeAula, { foreignKey: 'curso_id', as: 'planos' });
      Curso.hasMany(models.Avaliacao, { foreignKey: 'curso_id', as: 'avaliacoes' });
      Curso.hasMany(models.Certificado, { foreignKey: 'curso_id', as: 'certificados' });
      Curso.hasMany(models.Feedback, { foreignKey: 'curso_id', as: 'feedbacks' });
    }
  }
  Curso.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    carga_horaria: DataTypes.INTEGER,
    modalidade: DataTypes.STRING,
    nivel: DataTypes.STRING,
    coordenador_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Curso',
    tableName: 'coursess',
    timestamps: true,
    
  });
  return Curso;
};
