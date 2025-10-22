'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Instrutor extends Model {
        static associate(models) {
            Instrutor.belongsTo(models.DepartamentoInterno, { foreignKey: 'departamento_id', as: 'departamento' });
            Instrutor.hasMany(models.PlanoDeAula, { foreignKey: 'instrutor_id', as: 'planos' });
            Instrutor.hasMany(models.Avaliacao, { foreignKey: 'instrutor_id', as: 'avaliacoes' });
            Instrutor.hasMany(models.Feedback, { foreignKey: 'instrutor_id', as: 'feedbacks' });
        }
    }
    Instrutor.init({
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        especialidade: DataTypes.STRING,
        curriculo: DataTypes.TEXT,
        departamento_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Instrutor',
        tableName: 'instructorss',
        timestamps: true,
        underscored: true
    });
    return Instrutor;
};
