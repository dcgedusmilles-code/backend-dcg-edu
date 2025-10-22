'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RelacaoPublica extends Model { }
    RelacaoPublica.init({
        nome_contato: DataTypes.STRING,
        instituicao: DataTypes.STRING,
        cargo: DataTypes.STRING,
        telefone: DataTypes.STRING,
        email: DataTypes.STRING,
        observacoes: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'RelacaoPublica',
        tableName: 'public_relationss',
        timestamps: true,
        
    });
    return RelacaoPublica;
};
