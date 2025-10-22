'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Manutencao extends Model {
        static associate(models) {
            Manutencao.belongsTo(models.Patrimonio, { foreignKey: 'id_patrimonio', as: 'patrimonio' });
            Manutencao.belongsTo(models.Fornecedor, { foreignKey: 'fornecedor', as: 'fornecedor_info' });
        }
    }
    Manutencao.init({
        id_patrimonio: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        descricao_servico: DataTypes.TEXT,
        fornecedor: DataTypes.INTEGER,
        custo_estimado: DataTypes.FLOAT,
        custo_real: DataTypes.FLOAT,
        data_agendada: DataTypes.DATE,
        data_execucao: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Manutencao',
        tableName: 'maintenances',
        timestamps: true,
        underscored: true
    });
    return Manutencao;
};
