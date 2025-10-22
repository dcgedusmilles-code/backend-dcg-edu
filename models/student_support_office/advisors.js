'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Orientador extends Model {
        static associate(models) {
            Orientador.hasMany(models.Agendamento, { foreignKey: 'id_orientador', as: 'agendamentos' });
            Orientador.hasMany(models.EventoApoio, { foreignKey: 'responsavel', as: 'eventos' });
        }
    }
    Orientador.init({
        nome: DataTypes.STRING,
        especialidade: DataTypes.STRING,
        telefone: DataTypes.STRING,
        email: DataTypes.STRING,
        disponibilidade: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Orientador',
        tableName: 'advisorss',
        timestamps: true,
        
    });
    return Orientador;
};