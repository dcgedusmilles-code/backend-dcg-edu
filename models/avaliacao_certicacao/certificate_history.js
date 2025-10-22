'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class HistoricoCertificado extends Model {
        static associate(models) {
            HistoricoCertificado.belongsTo(models.Certificado, { foreignKey: 'certificado_id', as: 'certificado' });
        }
    }
    HistoricoCertificado.init({
        certificado_id: DataTypes.INTEGER,
        acao: DataTypes.STRING,
        data: DataTypes.DATE,
        responsavel: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'HistoricoCertificado',
        tableName: 'certificate_historys',
        timestamps: true
    });
    return HistoricoCertificado;
};
