'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class LogAcesso extends Model {
        static associate(models) {
            LogAcesso.belongsTo(models.UsuarioTI, { foreignKey: 'usuario_id', as: 'usuario' });
        }
    }
    LogAcesso.init({
        usuario_id: DataTypes.INTEGER,
        sistema: DataTypes.STRING,
        acao: DataTypes.STRING,
        data_hora: DataTypes.DATE,
        ip_origem: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'LogAcesso',
        tableName: 'logs_accesss',
        timestamps: true,
        
    });
    return LogAcesso;
};
