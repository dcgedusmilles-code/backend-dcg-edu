'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProgramaEmpregabilidade extends Model {
        static associate(models) {
            ProgramaEmpregabilidade.belongsTo(models.EmpresaParceira, { foreignKey: 'parceiro', as: 'empresa' });
        }
    }
    ProgramaEmpregabilidade.init({
        nome: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        tipo: DataTypes.STRING,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
        parceiro: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'ProgramaEmpregabilidade',
        tableName: 'employability_programss',
        timestamps: true,
        underscored: true
    });
    return ProgramaEmpregabilidade;
};
