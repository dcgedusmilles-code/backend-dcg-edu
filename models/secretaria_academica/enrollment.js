'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Matricula extends Model {
        static associate(models) {
            Matricula.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' });
            Matricula.belongsTo(models.Curso, { foreignKey: 'curso_id', as: 'curso' });
            Matricula.belongsTo(models.Turma, { foreignKey: 'turma_id', as: 'turma' });
            Matricula.hasMany(models.InscricaoDisciplina, { foreignKey: 'matricula_id', as: 'inscricoes' });
        }
    }
    Matricula.init({
        aluno_id: DataTypes.INTEGER,
        curso_id: DataTypes.INTEGER,
        turma_id: DataTypes.INTEGER,
        data_matricula: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Matricula',
        tableName: 'enrollments',
        timestamps: true,
        
    });
    return Matricula;
};
