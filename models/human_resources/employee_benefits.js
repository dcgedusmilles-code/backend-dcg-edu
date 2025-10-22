'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class FuncionarioBeneficio extends Model {
        static associate(models) {
            FuncionarioBeneficio.belongsTo(models.Funcionario, { foreignKey: 'funcionario_id', as: 'funcionario' });
            FuncionarioBeneficio.belongsTo(models.Beneficio, { foreignKey: 'beneficio_id', as: 'beneficio' });
        }
    }
    FuncionarioBeneficio.init({
        funcionario_id: DataTypes.INTEGER,
        beneficio_id: DataTypes.INTEGER,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'FuncionarioBeneficio',
        tableName: 'employee_benefitss',
        timestamps: true,
        underscored: true
    });
    return FuncionarioBeneficio;
};
