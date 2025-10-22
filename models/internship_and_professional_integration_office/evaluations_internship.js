'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AvaliacaoEstagio extends Model {
        static associate(models) {
            AvaliacaoEstagio.belongsTo(models.Estagio, { foreignKey: 'id_estagio', as: 'estagio' });
        }
    }
    AvaliacaoEstagio.init({
        id_estagio: DataTypes.INTEGER,
        avaliador: DataTypes.STRING,
        desempenho: DataTypes.STRING,
        competencias_desenvolvidas: DataTypes.TEXT,
        pontos_fortes: DataTypes.TEXT,
        pontos_a_melhorar: DataTypes.TEXT,
        data_avaliacao: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'AvaliacaoEstagio',
        tableName: 'evaluations_internships',
        timestamps: true,
        underscored: true
    });
    return AvaliacaoEstagio;
};
