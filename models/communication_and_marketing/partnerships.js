'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Parceria extends Model { }
    Parceria.init({
        nome_parceiro: DataTypes.STRING,
        tipo: DataTypes.STRING,
        contato: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        beneficios_oferecidos: DataTypes.TEXT,
        beneficios_recebidos: DataTypes.TEXT,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Parceria',
        tableName: 'partnershipss',
        timestamps: true,
        
    });
    return Parceria;
};
