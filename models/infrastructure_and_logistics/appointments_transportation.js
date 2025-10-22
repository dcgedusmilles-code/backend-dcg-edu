'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AgendamentoTransporte extends Model {
        static associate(models) {
            AgendamentoTransporte.belongsTo(models.Transporte, { foreignKey: 'id_transporte', as: 'transporte' });
            AgendamentoTransporte.belongsTo(models.Funcionario, { foreignKey: 'motorista', as: 'motorista_info' });
        }
    }
    AgendamentoTransporte.init({
        id_transporte: DataTypes.INTEGER,
        finalidade: DataTypes.STRING,
        motorista: DataTypes.INTEGER,
        origem: DataTypes.STRING,
        destino: DataTypes.STRING,
        data_saida: DataTypes.DATE,
        data_retorno: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'AgendamentoTransporte',
        tableName: 'appointments_transportations',
        timestamps: true,
        underscored: true
    });
    return AgendamentoTransporte;
};
