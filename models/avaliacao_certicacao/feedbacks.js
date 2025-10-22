'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Feedback extends Model {
        static associate(models) {
            Feedback.belongsTo(models.Avaliacao, { foreignKey: 'avaliacao_id', as: 'avaliacao' });
            Feedback.belongsTo(models.Participante, { foreignKey: 'participante_id', as: 'participante' });
            Feedback.belongsTo(models.Curso, { foreignKey: 'curso_id', as: 'curso' });
            Feedback.belongsTo(models.Instrutor, { foreignKey: 'instrutor_id', as: 'instrutor' });
        }
    }
    Feedback.init({
        avaliacao_id: DataTypes.INTEGER,
        participante_id: DataTypes.INTEGER,
        curso_id: DataTypes.INTEGER,
        instrutor_id: DataTypes.INTEGER,
        comentario: DataTypes.TEXT,
        nota: DataTypes.INTEGER,
        data: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Feedback',
        tableName: 'feedbackss',
        timestamps: true
    });
    return Feedback;
};
