'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProdutoServico extends Model {
        static associate(models) {
            ProdutoServico.hasMany(models.Venda, { foreignKey: 'id_produto', as: 'vendas' });
        }
    }
    ProdutoServico.init({
        nome: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        tipo: DataTypes.STRING,
        preco_base: DataTypes.FLOAT,
        status: DataTypes.STRING
    }, { sequelize,
    modelName: 'ProdutoServico',
    tableName: 'produto_servicos',
    timestamps: true,
    
  });
    return ProdutoServico;
};
