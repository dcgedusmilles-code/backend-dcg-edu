'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Disciplina extends Model {
        static associate(models) {
            Disciplina.belongsTo(models.Curso, { foreignKey: 'curso_id', as: 'curso' });
            Disciplina.hasMany(models.PlanoDeAula, { foreignKey: 'disciplina_id', as: 'planos' });
            Disciplina.hasMany(models.Aula, { foreignKey: 'disciplina_id', as: 'aulas' });
            Disciplina.hasMany(models.Avaliacao, { foreignKey: 'disciplina_id', as: 'avaliacoes' });
        }
    }
    Disciplina.init({
        nome: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        carga_horaria: DataTypes.INTEGER,
        curso_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Disciplina',
        tableName: 'discipliness',
        timestamps: true,
        
    });
    return Disciplina;
};
