'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class BeneficioEstudantil extends Model {
        static associate(models) {
            BeneficioEstudantil.belongsTo(models.Aluno, { foreignKey: 'id_estudante', as: 'estudante' });
        }
    }
    BeneficioEstudantil.init({
        id_estudante: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        status: DataTypes.STRING,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'BeneficioEstudantil',
        tableName: 'student_benefitss',
        timestamps: true,
        
    });
    return BeneficioEstudantil;
};
