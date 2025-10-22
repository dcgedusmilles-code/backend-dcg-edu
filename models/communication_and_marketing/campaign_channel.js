'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CampanhaCanal extends Model { }
    CampanhaCanal.init({
        id_campanha: DataTypes.INTEGER,
        id_canal: DataTypes.INTEGER,
        custo: DataTypes.FLOAT,
        resultado_medido: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'CampanhaCanal',
        tableName: 'campaign_channels',
        timestamps: true,
        underscored: true
    });
    return CampanhaCanal;
};
