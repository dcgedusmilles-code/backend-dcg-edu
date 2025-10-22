'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SessaoEstudo extends Model {
        static associate(models) {
            SessaoEstudo.belongsTo(models.UsuarioBiblioteca, { foreignKey: 'id_usuario', as: 'usuario' });
        }
    }
    SessaoEstudo.init({
        id_usuario: DataTypes.INTEGER,
        local: DataTypes.STRING,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'SessaoEstudo',
        tableName: 'study_sessions',
        timestamps: true,
        underscored: true
    });
    return SessaoEstudo;
};
