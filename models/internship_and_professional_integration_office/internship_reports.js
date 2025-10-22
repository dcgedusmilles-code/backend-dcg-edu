'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RelatorioEstagio extends Model {
        static associate(models) {
            RelatorioEstagio.belongsTo(models.Estagio, { foreignKey: 'id_estagio', as: 'estagio' });
        }
    }
    RelatorioEstagio.init({
        id_estagio: DataTypes.INTEGER,
        titulo: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        data_envio: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'RelatorioEstagio',
        tableName: 'internship_reportss',
        timestamps: true,
        underscored: true
    });
    return RelatorioEstagio;
};
