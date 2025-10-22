'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Fornecedor extends Model {
        static associate(models) {
            Fornecedor.hasMany(models.ContaPagar, { foreignKey: 'fornecedor_id', as: 'contas' });
        }
    }
    Fornecedor.init({
        nome: DataTypes.STRING,
        cnpj: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        endereco: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Fornecedor',
        tableName: 'supplierss',
        timestamps: true,
        
    });
    return Fornecedor;
};
