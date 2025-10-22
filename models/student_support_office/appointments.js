'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Agendamento extends Model {
        static associate(models) {
            Agendamento.belongsTo(models.Aluno, { foreignKey: 'id_estudante', as: 'estudante' });
            Agendamento.belongsTo(models.Orientador, { foreignKey: 'id_orientador', as: 'orientador' });
        }
    }
    Agendamento.init({
        id_estudante: DataTypes.INTEGER,
        id_orientador: DataTypes.INTEGER,
        data_horario: DataTypes.DATE,
        motivo: DataTypes.STRING,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Agendamento',
        tableName: 'appointmentss',
        timestamps: true,
        
    });
    return Agendamento;
};
