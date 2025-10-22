'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PropostaComercial extends Model {
        static associate(models) {
            PropostaComercial.belongsTo(models.Cliente, { foreignKey: 'id_cliente', as: 'cliente' });
            PropostaComercial.belongsTo(models.Oportunidade, { foreignKey: 'id_oportunidade', as: 'oportunidade' });
        }
    }
    PropostaComercial.init({
        id_cliente: DataTypes.INTEGER,
        id_oportunidade: DataTypes.INTEGER,
        descricao: DataTypes.TEXT,
        valor_proposta: DataTypes.FLOAT,
        status: DataTypes.STRING,
        data_envio: DataTypes.DATE,
        data_resposta: DataTypes.DATE
    }, { sequelize,
    modelName: 'PropostaComercial',
    tableName: 'proposta_comercials',
    timestamps: true,
    underscored: true
  });
    return PropostaComercial;
};
