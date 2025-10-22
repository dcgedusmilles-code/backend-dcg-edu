'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class BolsaEstudantil extends Model {
        static associate(models) { }
    }
    BolsaEstudantil.init({
        nome_bolsa: DataTypes.STRING,
        tipo: DataTypes.STRING,
        criterios: DataTypes.TEXT,
        valor: DataTypes.FLOAT,
        periodo: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'BolsaEstudantil',
        tableName: 'student_scholarshipss',
        timestamps: true,
        
    });
    return BolsaEstudantil;
};
