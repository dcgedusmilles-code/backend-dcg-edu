'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ManutencaoTI extends Model {
        static associate(models) {
            ManutencaoTI.belongsTo(models.AtivoTI, { foreignKey: 'ativo_id', as: 'ativo' });
            ManutencaoTI.belongsTo(models.TecnicoTI, { foreignKey: 'responsavel', as: 'tecnico' });
        }
    }
    ManutencaoTI.init({
        ativo_id: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
        responsavel: DataTypes.INTEGER,
        custo: DataTypes.FLOAT
    }, {
        sequelize,
        modelName: 'ManutencaoTI',
        tableName: 'it_maintenances',
        timestamps: true,
        underscored: true
    });
    return ManutencaoTI;
};
