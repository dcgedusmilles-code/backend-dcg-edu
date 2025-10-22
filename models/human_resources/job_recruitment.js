'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RecrutamentoVaga extends Model {
        static associate(models) {
            RecrutamentoVaga.hasMany(models.ProcessoSeletivo, { foreignKey: 'vaga_id', as: 'processos' });
        }
    }
    RecrutamentoVaga.init({
        titulo: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        requisitos: DataTypes.TEXT,
        salario_proposto: DataTypes.FLOAT,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'RecrutamentoVaga',
        tableName: 'job_recruitments',
        timestamps: true,
        
    });
    return RecrutamentoVaga;
};
