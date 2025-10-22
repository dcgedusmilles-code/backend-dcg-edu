'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RedeInfraestrutura extends Model {
        static associate(models) {
            RedeInfraestrutura.belongsTo(models.TecnicoTI, { foreignKey: 'responsavel', as: 'tecnico' });
        }
    }
    RedeInfraestrutura.init({
        nome: DataTypes.STRING,
        tipo: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        responsavel: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'RedeInfraestrutura',
        tableName: 'infrastructure_networks',
        timestamps: true,
        
    });
    return RedeInfraestrutura;
};
