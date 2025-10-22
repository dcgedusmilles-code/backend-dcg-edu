'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TecnicoTI extends Model {
        static associate(models) {
            TecnicoTI.hasMany(models.ManutencaoTI, { foreignKey: 'responsavel', as: 'manutencoes' });
            TecnicoTI.hasMany(models.RedeInfraestrutura, { foreignKey: 'responsavel', as: 'redes' });
            TecnicoTI.hasMany(models.SegurancaTI, { foreignKey: 'responsavel', as: 'segurancas' });
            TecnicoTI.hasMany(models.ProjetoTI, { foreignKey: 'responsavel', as: 'projetos' });
        }
    }
    TecnicoTI.init({
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        especialidade: DataTypes.STRING,
        cargo: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'TecnicoTI',
        tableName: 'it_technicianss',
        timestamps: true,
        
    });
    return TecnicoTI;
};
