'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SuporteTI extends Model {
        static associate(models) {
            SuporteTI.belongsTo(models.UsuarioTI, { foreignKey: 'usuario_id', as: 'usuario' });
            SuporteTI.belongsTo(models.AtivoTI, { foreignKey: 'ativo_id', as: 'ativo' });
        }
    }
    SuporteTI.init({
        usuario_id: DataTypes.INTEGER,
        ativo_id: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        prioridade: DataTypes.STRING,
        status: DataTypes.STRING,
        data_abertura: DataTypes.DATE,
        data_fechamento: DataTypes.DATE,
        responsavel: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'SuporteTI',
        tableName: 'it_supports',
        timestamps: true,
        underscored: true
    });
    return SuporteTI;
};
