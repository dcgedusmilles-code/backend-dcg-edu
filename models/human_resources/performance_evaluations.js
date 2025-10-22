'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AvaliacaoDesempenho extends Model {
        static associate(models) {
            AvaliacaoDesempenho.belongsTo(models.Funcionario, { foreignKey: 'funcionario_id', as: 'funcionario' });
        }
    }
    AvaliacaoDesempenho.init({
        funcionario_id: DataTypes.INTEGER,
        periodo: DataTypes.STRING,
        nota: DataTypes.FLOAT,
        feedback: DataTypes.TEXT,
        avaliador: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'AvaliacaoDesempenho',
        tableName: 'performance_evaluationss',
        timestamps: true,
        
    });
    return AvaliacaoDesempenho;
};
