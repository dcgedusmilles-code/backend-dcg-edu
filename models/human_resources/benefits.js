'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Beneficio extends Model {
        static associate(models) {
            Beneficio.hasMany(models.FuncionarioBeneficio, { foreignKey: 'beneficio_id', as: 'funcionarios' });
        }
    }
    Beneficio.init({
        nome: DataTypes.STRING,
        descricao: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Beneficio',
        tableName: 'benefitss',
        timestamps: true,
        
    });
    return Beneficio;
};
