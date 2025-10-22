'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CalendarioAcademico extends Model {
    static associate(models) { }
  }
  CalendarioAcademico.init({
    ano_letivo: DataTypes.INTEGER,
    semestre: DataTypes.INTEGER,
    data_inicio: DataTypes.DATE,
    data_fim: DataTypes.DATE,
    feriados: DataTypes.JSON,
    eventos_academicos: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'CalendarioAcademico',
    tableName: 'academic_calendars',
    timestamps: true,
    underscored: true
  });
  return CalendarioAcademico;
};
