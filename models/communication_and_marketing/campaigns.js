'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Campanha extends Model {
        static associate(models) {
            Campanha.belongsToMany(models.CanalDivulgacao, {
                through: models.CampanhaCanal,
                foreignKey: 'id_campanha',
                as: 'canais'
            });
            Campanha.hasMany(models.MetricaMarketing, { foreignKey: 'id_campanha', as: 'metricas' });
        }
    }
    Campanha.init({
        titulo: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        tipo_campanha: DataTypes.STRING,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
        status: DataTypes.STRING,
        orcamento_estimado: DataTypes.FLOAT,
        orcamento_real: DataTypes.FLOAT
    }, {
        sequelize,
        modelName: 'Campanha',
        tableName: 'campaignss',
        timestamps: true,
        
    });
    return Campanha;
};
