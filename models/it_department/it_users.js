'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class UsuarioTI extends Model {
        static associate(models) {
            UsuarioTI.hasMany(models.ContaSistema, { foreignKey: 'usuario_id', as: 'contas' });
            UsuarioTI.hasMany(models.SuporteTI, { foreignKey: 'usuario_id', as: 'chamados' });
            UsuarioTI.hasMany(models.LogAcesso, { foreignKey: 'usuario_id', as: 'logs' });
            UsuarioTI.belongsTo(models.DepartamentoInterno, { foreignKey: 'departamento_id', as: 'departamento' });
        }
    }
    UsuarioTI.init({
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        departamento_id: DataTypes.INTEGER,
        cargo: DataTypes.STRING,
        tipo_usuario: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'UsuarioTI',
        tableName: 'it_userss',
        timestamps: true,
        
    });
    return UsuarioTI;
};
