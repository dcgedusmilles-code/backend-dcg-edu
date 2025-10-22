'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RelatorioComercial extends Model { }
    RelatorioComercial.init({
        periodo: DataTypes.STRING,
        total_vendas: DataTypes.FLOAT,
        total_clientes_novos: DataTypes.INTEGER,
        taxa_conversao: DataTypes.FLOAT,
        receita_gerada: DataTypes.FLOAT,
        comparativo_periodo_anterior: DataTypes.FLOAT
    }, { sequelize,
    modelName: 'RelatorioComercial',
    tableName: 'relatorio_comercials',
    timestamps: true,
    underscored: true
  });
    return RelatorioComercial;
};
