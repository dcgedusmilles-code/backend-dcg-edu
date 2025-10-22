'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CriterioAvaliacao extends Model {
        static associate(models) {
            CriterioAvaliacao.belongsTo(models.Avaliacao, { foreignKey: 'avaliacao_id', as: 'avaliacao' });
        }
    }
    CriterioAvaliacao.init({
        avaliacao_id: DataTypes.INTEGER,
        descricao: DataTypes.STRING,
        peso: DataTypes.FLOAT
    }, {
        sequelize,
        modelName: 'CriterioAvaliacao',
        tableName: 'evaluation_criterias',
        timestamps: true
    });
    return CriterioAvaliacao;
};
