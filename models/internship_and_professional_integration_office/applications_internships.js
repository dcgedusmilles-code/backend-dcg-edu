'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CandidaturaEstagio extends Model {
        static associate(models) {
            CandidaturaEstagio.belongsTo(models.VagaEstagio, { foreignKey: 'id_vaga', as: 'vaga' });
            CandidaturaEstagio.belongsTo(models.Aluno, { foreignKey: 'id_estudante', as: 'estudante' });
        }
    }
    CandidaturaEstagio.init({
        id_vaga: DataTypes.INTEGER,
        id_estudante: DataTypes.INTEGER,
        data_candidatura: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'CandidaturaEstagio',
        tableName: 'applications_internshipss',
        timestamps: true,
        underscored: true
    });
    return CandidaturaEstagio;
};
