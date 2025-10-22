'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class MovimentacaoEstoque extends Model {
        static associate(models) {
            MovimentacaoEstoque.belongsTo(models.EstoqueLogistico, { foreignKey: 'id_item', as: 'item' });
            MovimentacaoEstoque.belongsTo(models.Funcionario, { foreignKey: 'responsavel', as: 'responsavel_info' });
        }
    }
    MovimentacaoEstoque.init({
        id_item: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        quantidade: DataTypes.INTEGER,
        data_movimentacao: DataTypes.DATE,
        responsavel: DataTypes.INTEGER,
        destino: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'MovimentacaoEstoque',
        tableName: 'stock_movementss',
        timestamps: true,
        
    });
    return MovimentacaoEstoque;
};
