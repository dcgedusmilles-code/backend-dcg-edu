'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ReclamacaoSugestao extends Model {
        static associate(models) {
            ReclamacaoSugestao.belongsTo(models.Aluno, { foreignKey: 'id_estudante', as: 'estudante' });
        }
    }
    ReclamacaoSugestao.init({
        id_estudante: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        data_envio: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'ReclamacaoSugestao',
        tableName: 'complaints_suggestionss',
        timestamps: true,
        underscored: true
    });
    return ReclamacaoSugestao;
};
