'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CanalDivulgacao extends Model {
        static associate(models) {
            CanalDivulgacao.belongsToMany(models.Campanha, {
                through: models.CampanhaCanal,
                foreignKey: 'id_canal',
                as: 'campanhas'
            });
        }
    }
    CanalDivulgacao.init({
        nome: DataTypes.STRING,
        tipo: DataTypes.STRING,
        descricao: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'CanalDivulgacao',
        tableName: 'channels_disclosures',
        timestamps: true,
        underscored: true
    });
    return CanalDivulgacao;
};
