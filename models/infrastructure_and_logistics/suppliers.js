'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Fornecedor extends Model {
        static associate(models) {
            Fornecedor.hasMany(models.Manutencao, { foreignKey: 'fornecedor', as: 'manutencoes' });
            Fornecedor.hasMany(models.ObraInfraestrutura, { foreignKey: 'fornecedor', as: 'obras' });
        }
    }
    Fornecedor.init({
        nome: DataTypes.STRING,
        tipo: DataTypes.STRING,
        telefone: DataTypes.STRING,
        email: DataTypes.STRING,
        endereco: DataTypes.STRING,
        observacoes: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Fornecedor',
        tableName: 'supplierss',
        timestamps: true,
        
    });
    return Fornecedor;
};
