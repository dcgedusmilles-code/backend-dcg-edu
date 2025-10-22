'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ResultadoAvaliacao extends Model {
        static associate(models) {
            ResultadoAvaliacao.belongsTo(models.Avaliacao, { foreignKey: 'avaliacao_id', as: 'avaliacao' });
            ResultadoAvaliacao.belongsTo(models.Participante, { foreignKey: 'participante_id', as: 'participante' });
            ResultadoAvaliacao.hasMany(models.RecursoAvaliacao, { foreignKey: 'resultado_id', as: 'recursos' });
        }
    }
    ResultadoAvaliacao.init({
        avaliacao_id: DataTypes.INTEGER,
        participante_id: DataTypes.INTEGER,
        nota_reading: DataTypes.FLOAT,
        nota_writer: DataTypes.FLOAT,
        nota_speek: DataTypes.FLOAT,
        nota: DataTypes.FLOAT,
        status: DataTypes.STRING,
        observacao: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'ResultadoAvaliacao',
        tableName: 'assessment_resultss',
        timestamps: true
    });
    return ResultadoAvaliacao;
};
