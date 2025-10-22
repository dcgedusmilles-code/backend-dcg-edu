'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coordenador extends Model {
    static associate(models) {
      Coordenador.belongsTo(models.DepartamentoInterno, { foreignKey: 'departamento_id', as: 'departamento' });
      Coordenador.hasMany(models.Curso, { foreignKey: 'coordenador_id', as: 'cursos' });
      Coordenador.hasMany(models.Turma, { foreignKey: 'coordenador_id', as: 'turmas' });
    }
  }
  Coordenador.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    departamento_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Coordenador',
    tableName: 'coordinators',
    timestamps: true,
    underscored: true
  });
  return Coordenador;
};
