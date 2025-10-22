'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Conteudo extends Model {
        static associate(models) {
            Conteudo.belongsTo(models.Funcionario, { foreignKey: 'autor', as: 'autorConteudo' });
        }
    }
    Conteudo.init({
        titulo: DataTypes.STRING,
        tipo: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        data_criacao: DataTypes.DATE,
        autor: DataTypes.INTEGER,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Conteudo',
        tableName: 'contentss',
        timestamps: true,
        
    });
    return Conteudo;
};
