'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CatalogoDigital extends Model { }
  CatalogoDigital.init({
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    tipo: DataTypes.STRING,
    url_acesso: DataTypes.STRING,
    licenca: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CatalogoDigital',
    tableName: 'digital_catalogs',
    timestamps: true,
    underscored: true
  });
  return CatalogoDigital;
};
