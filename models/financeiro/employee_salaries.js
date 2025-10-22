'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SalarioFuncionario extends Model {
        static associate(models) {
            SalarioFuncionario.belongsTo(models.FuncionarioSecretaria, { foreignKey: 'funcionario_id', as: 'funcionario' });
        }
    }
    SalarioFuncionario.init({
        funcionario_id: DataTypes.INTEGER,
        salario_base: DataTypes.FLOAT,
        beneficios: DataTypes.FLOAT,
        descontos: DataTypes.FLOAT,
        valor_liquido: DataTypes.FLOAT,
        data_pagamento: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'SalarioFuncionario',
        tableName: 'employee_salariess',
        timestamps: true,
        underscored: true
    });
    return SalarioFuncionario;
};
