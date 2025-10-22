'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ParticipacaoTreinamento extends Model {
        static associate(models) {
            ParticipacaoTreinamento.belongsTo(models.Treinamento, { foreignKey: 'treinamento_id', as: 'treinamento' });
            ParticipacaoTreinamento.belongsTo(models.Funcionario, { foreignKey: 'funcionario_id', as: 'funcionario' });
        }
    }
    ParticipacaoTreinamento.init({
        treinamento_id: DataTypes.INTEGER,
        funcionario_id: DataTypes.INTEGER,
        status: DataTypes.STRING,
        nota_avaliacao: DataTypes.FLOAT
    }, {
        sequelize,
        modelName: 'ParticipacaoTreinamento',
        tableName: 'participation_in_trainings',
        timestamps: true,
        underscored: true
    });
    return ParticipacaoTreinamento;
};
