'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Protocolo extends Model {
        static associate(models) {
            Protocolo.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' });
        }
    }
    Protocolo.init({
        aluno_id: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        data_abertura: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Protocolo',
        tableName: 'protocols',
        timestamps: true,
        underscored: true
    });
    return Protocolo;
};
