'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Comissao extends Model {
        static associate(models) {
            Comissao.belongsTo(models.Venda, { foreignKey: 'id_venda', as: 'venda' });
            Comissao.belongsTo(models.Funcionario, { foreignKey: 'id_funcionario', as: 'funcionario' });
        }
    }
    Comissao.init({
        id_venda: DataTypes.INTEGER,
        id_funcionario: DataTypes.INTEGER,
        percentual: DataTypes.FLOAT,
        valor: DataTypes.FLOAT,
        status: DataTypes.STRING,
        data_calculo: DataTypes.DATE,
        data_pagamento: DataTypes.DATE
    }, { sequelize,
    modelName: 'Comissao',
    tableName: 'comissaos',
    timestamps: true,
    underscored: true
  });
    return Comissao;
};
