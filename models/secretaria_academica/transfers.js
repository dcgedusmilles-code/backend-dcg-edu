'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Transferencia extends Model {
        static associate(models) {
            Transferencia.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' });
        }
    }
    Transferencia.init({
        aluno_id: DataTypes.INTEGER,
        curso_origem: DataTypes.STRING,
        curso_destino: DataTypes.STRING,
        data_solicitacao: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Transferencia',
        tableName: 'transferss',
        timestamps: true,
        underscored: true
    });
    return Transferencia;
};
