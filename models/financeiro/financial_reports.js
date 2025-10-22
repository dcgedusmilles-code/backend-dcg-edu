'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RelatorioFinanceiro extends Model {
        static associate(models) {
            RelatorioFinanceiro.belongsTo(models.Funcionario, { foreignKey: 'responsavel_id', as: 'responsavel' });

        }
    }
    RelatorioFinanceiro.init({
        tipo: DataTypes.STRING,
        periodo_inicio: DataTypes.DATE,
        periodo_fim: DataTypes.DATE,
        gerado_em: DataTypes.DATE,
        responsavel_id: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'RelatorioFinanceiro',
        tableName: 'financial_reportss',
        timestamps: true,
        underscored: true
    });
    return RelatorioFinanceiro;
};
