'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class FeedbackAvaliacao extends Model {
        static associate(models) {
            FeedbackAvaliacao.belongsTo(models.Avaliacao, { foreignKey: 'avaliacao_id', as: 'avaliacao' });
            FeedbackAvaliacao.belongsTo(models.Participante, { foreignKey: 'participante_id', as: 'participante' });
        }
    }
    FeedbackAvaliacao.init({
        avaliacao_id: DataTypes.INTEGER,
        participante_id: DataTypes.INTEGER,
        comentario: DataTypes.TEXT,
        nota: DataTypes.INTEGER,
        data: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'FeedbackAvaliacao',
        tableName: 'assessment_feedbackss',
        timestamps: true
    });
    return FeedbackAvaliacao;
};
