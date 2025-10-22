'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Transporte extends Model {
        static associate(models) {
            Transporte.hasMany(models.AgendamentoTransporte, { foreignKey: 'id_transporte', as: 'agendamentos' });
        }
    }
    Transporte.init({
        tipo: DataTypes.STRING,
        placa: DataTypes.STRING,
        modelo: DataTypes.STRING,
        capacidade: DataTypes.INTEGER,
        ano_fabricacao: DataTypes.INTEGER,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Transporte',
        tableName: 'transportations',
        timestamps: true,
        
    });
    return Transporte;
};
