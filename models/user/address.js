'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      Address.hasOne(models.Unidade, { foreignKey: 'endereco_id', as: 'unidade' });
    }
  }

  Address.init({
    rua: DataTypes.STRING,
    numero: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    provincia: DataTypes.STRING,
    pais: DataTypes.STRING,
    complemento: DataTypes.STRING,
    cep: DataTypes.STRING,
    coordenadas_latitude: DataTypes.STRING,
    coordenadas_longitude: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Endereco',
    tableName: 'addresses'
  });

  return Address;
};
