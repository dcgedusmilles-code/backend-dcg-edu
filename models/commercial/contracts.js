'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Contrato extends Model {
        static associate(models) {
            Contrato.belongsTo(models.Cliente, { foreignKey: 'id_cliente', as: 'cliente' });
            Contrato.belongsTo(models.Funcionario, { foreignKey: 'id_responsavel', as: 'responsavel' });
            Contrato.hasMany(models.Venda, { foreignKey: 'id_contrato', as: 'vendas' });
        }
    }
    Contrato.init({
        id_cliente: DataTypes.INTEGER,
        numero_contrato: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        valor_total: DataTypes.FLOAT,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
        status: DataTypes.STRING,
        id_responsavel: DataTypes.INTEGER
    }, { sequelize,
    modelName: 'Contrato',
    tableName: 'contratos',
    timestamps: true,
    
  });
    return Contrato;
};
