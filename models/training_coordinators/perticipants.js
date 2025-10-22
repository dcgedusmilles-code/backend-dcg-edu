'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Participante extends Model {
        static associate(models) {
            Participante.hasMany(models.Inscricao, { foreignKey: 'participante_id', as: 'inscricoes' });
            Participante.hasMany(models.ResultadoAvaliacao, { foreignKey: 'participante_id', as: 'resultados' });
            Participante.hasMany(models.Certificado, { foreignKey: 'participante_id', as: 'certificados' });
            Participante.hasMany(models.Feedback, { foreignKey: 'participante_id', as: 'feedbacks' });
        }
    }
    Participante.init({
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        cpf: DataTypes.STRING,
        endereco: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Participante',
        tableName: 'perticipantss',
        timestamps: true,
        underscored: true
    });
    return Participante;
};

