'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Oportunidade extends Model {
        static associate(models) {
            Oportunidade.belongsTo(models.Lead, { foreignKey: 'id_lead', as: 'lead' });
            Oportunidade.belongsTo(models.Funcionario, { foreignKey: 'responsavel_id', as: 'responsavel' });
            Oportunidade.hasMany(models.PropostaComercial, { foreignKey: 'id_oportunidade', as: 'propostas' });
        }
    }
    Oportunidade.init({
        id_lead: DataTypes.INTEGER,
        descricao: DataTypes.TEXT,
        valor_estimado: DataTypes.FLOAT,
        probabilidade: DataTypes.FLOAT,
        etapa_venda: DataTypes.STRING,
        responsavel_id: DataTypes.INTEGER,
        data_inicio: DataTypes.DATE,
        data_fechamento: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Oportunidade',
        tableName: 'oportunidades',
        timestamps: true,
        
    });
    return Oportunidade;
};
