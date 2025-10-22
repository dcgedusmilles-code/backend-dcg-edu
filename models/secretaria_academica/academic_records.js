'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class HistoricoAcademico extends Model {
        static associate(models) {
            HistoricoAcademico.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' });
            HistoricoAcademico.belongsTo(models.Disciplina, { foreignKey: 'disciplina_id', as: 'disciplina' });
        }
    }
    HistoricoAcademico.init({
        aluno_id: DataTypes.INTEGER,
        disciplina_id: DataTypes.INTEGER,
        nota_final: DataTypes.FLOAT,
        frequencia: DataTypes.FLOAT,
        resultado: DataTypes.STRING,
        semestre: DataTypes.STRING,
        ano: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'HistoricoAcademico',
        tableName: 'academic_recordss',
        timestamps: true,
        
    });
    return HistoricoAcademico;
};
