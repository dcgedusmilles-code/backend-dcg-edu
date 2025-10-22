'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RelacaoEmpresa extends Model {
        static associate(models) {
            RelacaoEmpresa.belongsTo(models.EmpresaParceira, { foreignKey: 'id_empresa', as: 'empresa' });
        }
    }
    RelacaoEmpresa.init({
        id_empresa: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'RelacaoEmpresa',
        tableName: 'business_relationshipss',
        timestamps: true,
        underscored: true
    });
    return RelacaoEmpresa;
};

