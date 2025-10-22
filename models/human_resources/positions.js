'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Cargo extends Model {
        static associate(models) {
            Cargo.belongsTo(models.DepartamentoInterno, { foreignKey: 'departamento_id', as: 'departamento' });
            Cargo.hasMany(models.Funcionario, { foreignKey: 'cargo_id', as: 'funcionarios' });
        }
    }
    Cargo.init({
        nome: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        departamento_id: DataTypes.INTEGER,
        salario_base: DataTypes.FLOAT
    }, {
        sequelize,
        modelName: 'Cargo',
        tableName: 'positionss',
    });
    return Cargo;
};
