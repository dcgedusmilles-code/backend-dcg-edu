'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class DepartamentoInterno extends Model {
        static associate(models) {
            DepartamentoInterno.hasMany(models.Cargo, { foreignKey: 'departamento_id', as: 'cargos' });
        }
    }
    DepartamentoInterno.init({
        nome: DataTypes.STRING,
        descricao: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'DepartamentoInterno',
        tableName: 'internal_departmentss',
        timestamps: true,
        
    });
    return DepartamentoInterno;
};
