'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Acervo extends Model {
        static associate(models) {
            Acervo.hasMany(models.Exemplar, { foreignKey: 'id_item', as: 'exemplares' });
        }
    }
    Acervo.init({
        titulo: DataTypes.STRING,
        autor: DataTypes.STRING,
        editora: DataTypes.STRING,
        ano_publicacao: DataTypes.INTEGER,
        isbn: DataTypes.STRING,
        tipo: DataTypes.STRING,
        categoria: DataTypes.STRING,
        idioma: DataTypes.STRING,
        localizacao: DataTypes.STRING,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Acervo',
        tableName: 'collections',
        timestamps: true,
        underscored: true
    });
    return Acervo;
};
