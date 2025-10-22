'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class LicencaSoftware extends Model { }
    LicencaSoftware.init({
        nome_software: DataTypes.STRING,
        chave_licenca: DataTypes.STRING,
        quantidade: DataTypes.INTEGER,
        data_inicio: DataTypes.DATE,
        data_validade: DataTypes.DATE,
        fornecedor: DataTypes.STRING,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'LicencaSoftware',
        tableName: 'software_licensess',
        timestamps: true,
        
    });
    return LicencaSoftware;
};
