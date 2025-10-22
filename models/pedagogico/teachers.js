'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Professor extends Model {
        static associate(models) {
            Professor.belongsTo(models.DepartamentoInterno, { foreignKey: 'departamento_id', as: 'departamento' });
            Professor.hasMany(models.PlanoDeAula, { foreignKey: 'professor_id', as: 'planos' });
            Professor.hasMany(models.Aula, { foreignKey: 'professor_id', as: 'aulas' });
            Professor.hasMany(models.Avaliacao, { foreignKey: 'professor_id', as: 'avaliacoes' });
        }
    }
    Professor.init({
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        formacao: DataTypes.STRING,
        departamento_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Professor',
        tableName: 'teacherss',
        timestamps: true,
        
    });
    return Professor;
};
