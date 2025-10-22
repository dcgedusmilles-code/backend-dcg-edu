'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SegurancaPatrimonial extends Model {
        static associate(models) {
            SegurancaPatrimonial.belongsTo(models.Local, { foreignKey: 'local_id', as: 'local' });
            SegurancaPatrimonial.belongsTo(models.Funcionario, { foreignKey: 'responsavel', as: 'responsavel_info' });
        }
    }
    SegurancaPatrimonial.init({
        tipo: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        local_id: DataTypes.INTEGER,
        data_registro: DataTypes.DATE,
        responsavel: DataTypes.INTEGER,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'SegurancaPatrimonial',
        tableName: 'asset_securitys',
        timestamps: true,
        underscored: true
    });
    return SegurancaPatrimonial;
};
