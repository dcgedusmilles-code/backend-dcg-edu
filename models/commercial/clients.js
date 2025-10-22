'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Cliente extends Model {
        static associate(models) {
            Cliente.hasMany(models.PropostaComercial, { foreignKey: 'id_cliente', as: 'propostas' });
            Cliente.hasMany(models.Contrato, { foreignKey: 'id_cliente', as: 'contratos' });
            Cliente.hasMany(models.Venda, { foreignKey: 'id_cliente', as: 'vendas' });
        }
    }
    Cliente.init({
        nome: DataTypes.STRING,
        tipo: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        endereco: DataTypes.STRING,
        data_cadastro: DataTypes.DATE,
        status: DataTypes.STRING
    }, { sequelize,
    modelName: 'Cliente',
    tableName: 'clientes',
    timestamps: true,
    underscored: true
  });
    return Cliente;
};
