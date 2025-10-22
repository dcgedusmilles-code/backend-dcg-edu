'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Venda extends Model {
        static associate(models) {
            Venda.belongsTo(models.Cliente, { foreignKey: 'id_cliente', as: 'cliente' });
            Venda.belongsTo(models.ProdutoServico, { foreignKey: 'id_produto', as: 'produto' });
            Venda.belongsTo(models.Contrato, { foreignKey: 'id_contrato', as: 'contrato' });
            Venda.hasMany(models.Comissao, { foreignKey: 'id_venda', as: 'comissoes' });
        }
    }
    Venda.init({
        id_cliente: DataTypes.INTEGER,
        id_produto: DataTypes.INTEGER,
        id_contrato: DataTypes.INTEGER,
        quantidade: DataTypes.INTEGER,
        valor_unitario: DataTypes.FLOAT,
        valor_total: DataTypes.FLOAT,
        data_venda: DataTypes.DATE,
        forma_pagamento: DataTypes.STRING
    }, { sequelize,
    modelName: 'Venda',
    tableName: 'vendas',
    timestamps: true,
    
  });
    return Venda;
};
