'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Treinamento extends Model {
        static associate(models) {
            Treinamento.hasMany(models.ParticipacaoTreinamento, { foreignKey: 'treinamento_id', as: 'participacoes' });
        }
    }
    Treinamento.init({
        titulo: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        carga_horaria: DataTypes.INTEGER,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
        responsavel: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Treinamento',
        tableName: 'trainingss',
        timestamps: true,
        underscored: true
    });
    return Treinamento;
};
