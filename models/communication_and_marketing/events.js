'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Evento extends Model {
        static associate(models) {
            Evento.belongsTo(models.Funcionario, { foreignKey: 'id_responsavel', as: 'responsavel' });
        }
    }
    Evento.init({
        nome: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        local: DataTypes.STRING,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
        publico_alvo: DataTypes.STRING,
        id_responsavel: DataTypes.INTEGER,
        tipo: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Evento',
        tableName: 'eventss',
        timestamps: true,
        
    });
    return Evento;
};
