'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProgramaCarreira extends Model {
        static associate(models) {
            ProgramaCarreira.belongsTo(models.InstituicaoParceira, { foreignKey: 'parceiro', as: 'instituicao' });
        }
    }
    ProgramaCarreira.init({
        nome: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        tipo: DataTypes.STRING,
        parceiro: DataTypes.INTEGER,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'ProgramaCarreira',
        tableName: 'career_programss',
        timestamps: true,
        
    });
    return ProgramaCarreira;
};
