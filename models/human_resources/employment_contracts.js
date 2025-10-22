'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ContratoTrabalho extends Model {
        static associate(models) {
            ContratoTrabalho.belongsTo(models.Funcionario, { foreignKey: 'funcionario_id', as: 'funcionario' });
        }
    }
    ContratoTrabalho.init({
        funcionario_id: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
        carga_horaria: DataTypes.INTEGER,
        salario_inicial: DataTypes.FLOAT
    }, {
        sequelize,
        modelName: 'ContratoTrabalho',
        tableName: 'employment_contractss',
        timestamps: true,
        
    });
    return ContratoTrabalho;
};
