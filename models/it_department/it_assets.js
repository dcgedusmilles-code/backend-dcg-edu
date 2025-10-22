'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AtivoTI extends Model {
        static associate(models) {
            AtivoTI.hasMany(models.SuporteTI, { foreignKey: 'ativo_id', as: 'suportes' });
            AtivoTI.hasMany(models.ManutencaoTI, { foreignKey: 'ativo_id', as: 'manutencoes' });
        }
    }
    AtivoTI.init({
        tipo: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        patrimonio: DataTypes.STRING,
        data_aquisicao: DataTypes.DATE,
        estado: DataTypes.STRING,
        localizacao: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'AtivoTI',
        tableName: 'it_assetss',
        timestamps: true,
        underscored: true
    });
    return AtivoTI;
};
