'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AdvertenciaDisciplina extends Model {
        static associate(models) {
            AdvertenciaDisciplina.belongsTo(models.Funcionario, { foreignKey: 'funcionario_id', as: 'funcionario' });
        }
    }
    AdvertenciaDisciplina.init({
        funcionario_id: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        motivo: DataTypes.TEXT,
        data: DataTypes.DATE,
        responsavel: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'AdvertenciaDisciplina',
        tableName: 'disciplinary_warningss',
        timestamps: true,
        
    });
    return AdvertenciaDisciplina;
};
