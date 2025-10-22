'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PesquisaMercado extends Model { }
    PesquisaMercado.init({
        titulo: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        objetivo: DataTypes.TEXT,
        publico_alvo: DataTypes.STRING,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
        resultado_resumido: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'PesquisaMercado',
        tableName: 'market_researches',
        timestamps: true,
        
    });
    return PesquisaMercado;
};
