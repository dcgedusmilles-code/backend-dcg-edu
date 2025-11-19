'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PlanoDeTreinoAula extends Model {
        static associate(models) {
            PlanoDeTreinoAula.belongsTo(models.Disciplina, { foreignKey: 'disciplina_id', as: 'disciplina' });
            PlanoDeTreinoAula.belongsTo(models.Professor, { foreignKey: 'professor_id', as: 'professor' });
            PlanoDeTreinoAula.belongsTo(models.Turma, { foreignKey: 'turma_id', as: 'turma' });
        }
    }
    PlanoDeTreinoAula.init({
        titulo: DataTypes.STRING,
        objetivos: DataTypes.TEXT,
        conteudo: DataTypes.TEXT,
        metodologia: DataTypes.TEXT,
        avaliacao: DataTypes.TEXT,
        disciplina_id: DataTypes.INTEGER,
        professor_id: DataTypes.INTEGER,
        turma_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'PlanoDeTreinoAula',
        tableName: 'training_plans',
        timestamps: true,
        
    });
    return PlanoDeTreinoAula;
};
