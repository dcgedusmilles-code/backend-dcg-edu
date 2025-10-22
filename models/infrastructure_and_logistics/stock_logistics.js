'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class EstoqueLogistico extends Model {
        static associate(models) {
            EstoqueLogistico.belongsTo(models.Local, { foreignKey: 'local_armazenado', as: 'local' });
            EstoqueLogistico.hasMany(models.MovimentacaoEstoque, { foreignKey: 'id_item', as: 'movimentacoes' });
        }
    }
    EstoqueLogistico.init({
        nome_item: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        categoria: DataTypes.STRING,
        quantidade_disponivel: DataTypes.INTEGER,
        unidade: DataTypes.STRING,
        local_armazenado: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'EstoqueLogistico',
        tableName: 'stock_logisticss',
        timestamps: true,
        
    });
    return EstoqueLogistico;
};
