'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class VagaEstagio extends Model {
        static associate(models) {
            VagaEstagio.belongsTo(models.EmpresaParceira, { foreignKey: 'id_empresa', as: 'empresa' });
            VagaEstagio.hasMany(models.CandidaturaEstagio, { foreignKey: 'id_vaga', as: 'candidaturas' });
        }
    }
    VagaEstagio.init({
        id_empresa: DataTypes.INTEGER,
        titulo_vaga: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        requisitos: DataTypes.TEXT,
        carga_horaria: DataTypes.STRING,
        remuneracao: DataTypes.FLOAT,
        data_abertura: DataTypes.DATE,
        data_fechamento: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'VagaEstagio',
        tableName: 'vacancies_internships',
        timestamps: true,
        underscored: true
    });
    return VagaEstagio;
};
