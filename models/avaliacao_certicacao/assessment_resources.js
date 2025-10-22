'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RecursoAvaliacao extends Model {
        static associate(models) {
            RecursoAvaliacao.belongsTo(models.ResultadoAvaliacao, { foreignKey: 'resultado_id', as: 'resultado' });
            RecursoAvaliacao.belongsTo(models.Participante, { foreignKey: 'participante_id', as: 'participante' });
        }
    }
    RecursoAvaliacao.init({
        resultado_id: DataTypes.INTEGER,
        participante_id: DataTypes.INTEGER,
        data_solicitacao: DataTypes.DATE,
        justificativa: DataTypes.TEXT,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'RecursoAvaliacao',
        tableName: 'assessment_resourcess',
        timestamps: true
    });
    return RecursoAvaliacao;
};
