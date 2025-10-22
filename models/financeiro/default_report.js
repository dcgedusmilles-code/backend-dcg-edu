'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Inadimplencia extends Model {
        static associate(models) {
            Inadimplencia.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' });
            Inadimplencia.belongsTo(models.Mensalidade, { foreignKey: 'mensalidade_id', as: 'mensalidade' });
        }
    }
    Inadimplencia.init({
        aluno_id: DataTypes.INTEGER,
        mensalidade_id: DataTypes.INTEGER,
        dias_atraso: DataTypes.INTEGER,
        valor_em_aberto: DataTypes.FLOAT,
        status_negociacao: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Inadimplencia',
        tableName: 'default_reports',
        timestamps: true,
        
    });
    return Inadimplencia;
};
