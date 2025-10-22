'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ContaPagar extends Model {
        static associate(models) {
            ContaPagar.belongsTo(models.Fornecedor, { foreignKey: 'fornecedor_id', as: 'fornecedor' });
        }
    }
    ContaPagar.init({
        fornecedor_id: DataTypes.INTEGER,
        descricao: DataTypes.STRING,
        valor: DataTypes.FLOAT,
        data_vencimento: DataTypes.DATE,
        data_pagamento: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'ContaPagar',
        tableName: 'accounts_payables',
        timestamps: true,
        
    });
    return ContaPagar;
};
