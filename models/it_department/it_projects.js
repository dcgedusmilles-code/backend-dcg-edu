'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProjetoTI extends Model {
        static associate(models) {
            ProjetoTI.belongsTo(models.TecnicoTI, { foreignKey: 'responsavel', as: 'tecnico' });
        }
    }
    ProjetoTI.init({
        nome: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
        status: DataTypes.STRING,
        responsavel: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'ProjetoTI',
        tableName: 'it_projectss',
        timestamps: true,
        underscored: true
    });
    return ProjetoTI;
};
