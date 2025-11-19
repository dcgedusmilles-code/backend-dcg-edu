'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Unit extends Model {
    static associate(models) {
      Unit.belongsTo(models.Endereco, { foreignKey: 'endereco_id', as: 'endereco' });
    }
  }

  Unit.init({
    nome: DataTypes.STRING,
    sigla: DataTypes.STRING,
    tipo: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.STRING,
    endereco_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Unidade',
    tableName: 'units'
  });

  return Unit;
};
