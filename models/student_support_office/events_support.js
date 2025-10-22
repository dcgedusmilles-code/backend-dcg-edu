'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class EventoApoio extends Model {
        static associate(models) {
            EventoApoio.belongsTo(models.Orientador, { foreignKey: 'responsavel', as: 'responsavel_orientador' });
            EventoApoio.belongsTo(models.Funcionario, { foreignKey: 'responsavel', as: 'responsavel_funcionario' });
        }
    }
    EventoApoio.init({
        nome_evento: DataTypes.STRING,
        tipo: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
        publico_alvo: DataTypes.STRING,
        responsavel: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'EventoApoio',
        tableName: 'events_supports',
        timestamps: true,
        
    });
    return EventoApoio;
};
