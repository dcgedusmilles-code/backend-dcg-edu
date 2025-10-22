'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class FolhaPagamento extends Model {
        static associate(models) {
            FolhaPagamento.belongsTo(models.Funcionario, { foreignKey: 'funcionario_id', as: 'funcionario' });
        }
    }
    FolhaPagamento.init({
        funcionario_id: DataTypes.INTEGER,
        referencia_mes: DataTypes.STRING,
        salario_base: DataTypes.FLOAT,
        horas_extras: DataTypes.FLOAT,
        descontos: DataTypes.FLOAT,
        beneficios: DataTypes.FLOAT,
        valor_liquido: DataTypes.FLOAT,
        data_pagamento: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'FolhaPagamento',
        tableName: 'payrolls',
        timestamps: true,
        underscored: true
    });
    return FolhaPagamento;
};
