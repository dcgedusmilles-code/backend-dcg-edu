'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ContaSistema extends Model {
        static associate(models) {
            ContaSistema.belongsTo(models.UsuarioTI, { foreignKey: 'usuario_id', as: 'usuario' });
        }
    }
    ContaSistema.init({
        usuario_id: DataTypes.INTEGER,
        sistema: DataTypes.STRING,
        username: DataTypes.STRING,
        senha_hash: DataTypes.STRING,
        status: DataTypes.STRING,
        data_criacao: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'ContaSistema',
        tableName: 'accounts_systemss',
        timestamps: true,
        
    });
    return ContaSistema;
};
