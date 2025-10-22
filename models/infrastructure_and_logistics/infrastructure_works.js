'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ObraInfraestrutura extends Model {
        static associate(models) {
            ObraInfraestrutura.belongsTo(models.Local, { foreignKey: 'local_id', as: 'local' });
            ObraInfraestrutura.belongsTo(models.Fornecedor, { foreignKey: 'fornecedor', as: 'fornecedor_info' });
        }
    }
    ObraInfraestrutura.init({
        nome_obra: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        local_id: DataTypes.INTEGER,
        fornecedor: DataTypes.INTEGER,
        custo_estimado: DataTypes.FLOAT,
        custo_real: DataTypes.FLOAT,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'ObraInfraestrutura',
        tableName: 'infrastructure_workss',
        timestamps: true,
        
    });
    return ObraInfraestrutura;
};
