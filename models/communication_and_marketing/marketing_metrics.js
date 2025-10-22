'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class MetricaMarketing extends Model {
        static associate(models) {
            MetricaMarketing.belongsTo(models.Campanha, { foreignKey: 'id_campanha', as: 'campanha' });
        }
    }
    MetricaMarketing.init({
        id_campanha: DataTypes.INTEGER,
        alcance: DataTypes.INTEGER,
        interacoes: DataTypes.INTEGER,
        conversoes: DataTypes.INTEGER,
        ROI: DataTypes.FLOAT,
        periodo_avaliado: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'MetricaMarketing',
        tableName: 'metricas_marketings',
        timestamps: true,
        underscored: true
    });
    return MetricaMarketing;
};

