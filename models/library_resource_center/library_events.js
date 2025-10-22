'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class EventoBiblioteca extends Model {
        static associate(models) {
            EventoBiblioteca.belongsTo(models.Funcionario, { foreignKey: 'responsavel', as: 'responsavelEvento' });
        }
    }
    EventoBiblioteca.init({
        titulo: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        tipo: DataTypes.STRING,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
        publico_alvo: DataTypes.STRING,
        responsavel: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'EventoBiblioteca',
        tableName: 'library_eventss',
        timestamps: true,
        underscored: true
    });
    return EventoBiblioteca;
};
