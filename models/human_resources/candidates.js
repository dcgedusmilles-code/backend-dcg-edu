'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Candidato extends Model {
        static associate(models) {
            Candidato.hasMany(models.ProcessoSeletivo, { foreignKey: 'candidato_id', as: 'processos' });
        }
    }
    Candidato.init({
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        documento: DataTypes.STRING,
        curriculo: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Candidato',
        tableName: 'candidatess',
        timestamps: true,
        
    });
    return Candidato;
};
