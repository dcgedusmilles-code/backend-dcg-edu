'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Lead extends Model {
        static associate(models) {
            Lead.hasMany(models.Oportunidade, { foreignKey: 'id_lead', as: 'oportunidades' });
        }
    }
    Lead.init({
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        origem: DataTypes.STRING,
        interesse: DataTypes.STRING,
        status: DataTypes.STRING,
        data_criacao: DataTypes.DATE,
        data_atualizacao: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Lead',
        tableName: 'leads',
        timestamps: true,
        underscored: true
    });
    return Lead;
};


