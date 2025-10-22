'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ContaReceber extends Model { }
    ContaReceber.init({
        descricao: DataTypes.STRING,
        valor: DataTypes.FLOAT,
        data_vencimento: DataTypes.DATE,
        data_recebimento: DataTypes.DATE,
        origem: DataTypes.STRING,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'ContaReceber',
        tableName: 'accounts_receivables',
        timestamps: true,
        underscored: true
    });
    return ContaReceber;
};
