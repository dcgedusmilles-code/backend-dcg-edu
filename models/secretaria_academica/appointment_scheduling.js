'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AgendamentoAtendimento extends Model {
        static associate(models) {
            AgendamentoAtendimento.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' });
            AgendamentoAtendimento.belongsTo(models.FuncionarioSecretaria, { foreignKey: 'funcionario_id', as: 'funcionario' });
        }
    }
    AgendamentoAtendimento.init({
        aluno_id: DataTypes.INTEGER,
        funcionario_id: DataTypes.INTEGER,
        data: DataTypes.DATE,
        hora: DataTypes.STRING,
        motivo: DataTypes.STRING,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'AgendamentoAtendimento',
        tableName: 'appointment_schedulings',
        timestamps: true,
        
    });
    return AgendamentoAtendimento;
};
