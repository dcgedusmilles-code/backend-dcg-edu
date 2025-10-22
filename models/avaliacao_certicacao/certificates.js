'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Certificado extends Model {
        static associate(models) {
            Certificado.belongsTo(models.Participante, { foreignKey: 'participante_id', as: 'participante' });
            Certificado.belongsTo(models.Curso, { foreignKey: 'curso_id', as: 'curso' });
            Certificado.belongsTo(models.Turma, { foreignKey: 'turma_id', as: 'turma' });
            Certificado.hasMany(models.HistoricoCertificado, { foreignKey: 'certificado_id', as: 'historico' });
        }
    }
    Certificado.init({
        participante_id: DataTypes.INTEGER,
        curso_id: DataTypes.INTEGER,
        turma_id: DataTypes.INTEGER,
        data_emissao: DataTypes.DATE,
        codigo_validacao: DataTypes.STRING,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Certificado',
        tableName: 'certificate_historys',
        timestamps: true

    });
    return Certificado;
};
