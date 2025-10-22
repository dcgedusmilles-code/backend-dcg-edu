'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Local extends Model {
        static associate(models) {
            Local.hasMany(models.Patrimonio, { foreignKey: 'localizacao', as: 'patrimonios' });
            Local.hasMany(models.EstoqueLogistico, { foreignKey: 'local_armazenado', as: 'estoque' });
            Local.hasMany(models.ObraInfraestrutura, { foreignKey: 'local', as: 'obras' });
            Local.hasMany(models.SegurancaPatrimonial, { foreignKey: 'local', as: 'seguranca' });
        }
    }
    Local.init({
        nome_local: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        capacidade: DataTypes.INTEGER,
        tipo: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Local',
        tableName: 'locationss',
        timestamps: true,
        underscored: true
    });
    return Local;
};
