'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CaixaMovimento extends Model { }
    CaixaMovimento.init({
        tipo: DataTypes.STRING,
        descricao: DataTypes.STRING,
        valor: DataTypes.FLOAT,
        data_movimento: DataTypes.DATE,
        responsavel: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'CaixaMovimento',
        tableName: 'cash_movementss',
        timestamps: true,
        underscored: true
    });
    return CaixaMovimento;
};
