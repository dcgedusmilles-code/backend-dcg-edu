'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InscricaoDisciplina extends Model {
        static associate(models) {
            InscricaoDisciplina.belongsTo(models.Matricula, { foreignKey: 'matricula_id', as: 'matricula' });
            InscricaoDisciplina.belongsTo(models.Disciplina, { foreignKey: 'disciplina_id', as: 'disciplina' });
        }
    }
    InscricaoDisciplina.init({
        matricula_id: DataTypes.INTEGER,
        disciplina_id: DataTypes.INTEGER,
        semestre: DataTypes.STRING,
        ano: DataTypes.INTEGER,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'InscricaoDisciplina',
        tableName: 'course_registrations',
        timestamps: true,
        
    });
    return InscricaoDisciplina;
};
