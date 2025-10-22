'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SugestaoAquisicao extends Model {
        static associate(models) {
            SugestaoAquisicao.belongsTo(models.UsuarioBiblioteca, { foreignKey: 'id_usuario', as: 'usuario' });
        }
    }
    SugestaoAquisicao.init({
        id_usuario: DataTypes.INTEGER,
        titulo_sugerido: DataTypes.STRING,
        autor: DataTypes.STRING,
        tipo: DataTypes.STRING,
        justificativa: DataTypes.TEXT,
        data_sugestao: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'SugestaoAquisicao',
        tableName: 'acquisition_suggestionss',
        timestamps: true,
        underscored: true
    });
    return SugestaoAquisicao;
};
