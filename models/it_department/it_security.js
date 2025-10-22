'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SegurancaTI extends Model {
        static associate(models) {
            SegurancaTI.belongsTo(models.TecnicoTI, { foreignKey: 'responsavel', as: 'tecnico' });
        }
    }
    SegurancaTI.init({
        descricao: DataTypes.TEXT,
        tipo: DataTypes.STRING,
        responsavel: DataTypes.INTEGER,
        data_implementacao: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'SegurancaTI',
        tableName: 'it_securitys',
        timestamps: true,
        
    });
    return SegurancaTI;
};
