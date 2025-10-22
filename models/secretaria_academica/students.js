'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Aluno extends Model {
        static associate(models) {
            // Relacionamentos já existentes
            Aluno.hasMany(models.Matricula, { foreignKey: 'aluno_id', as: 'matriculas' });
            Aluno.hasMany(models.HistoricoAcademico, { foreignKey: 'aluno_id', as: 'historicos' });
            Aluno.hasMany(models.DocumentoAcademico, { foreignKey: 'aluno_id', as: 'documentos' });
            Aluno.hasMany(models.Transferencia, { foreignKey: 'aluno_id', as: 'transferencias' });
            Aluno.hasMany(models.Protocolo, { foreignKey: 'aluno_id', as: 'protocolos' });
            Aluno.hasMany(models.AgendamentoAtendimento, { foreignKey: 'aluno_id', as: 'agendamentos' });

            // Novo relacionamento com Encarregado
            Aluno.belongsToMany(models.Encarregado, {
                through: models.AlunoEncarregado,
                foreignKey: 'aluno_id',
                otherKey: 'encarregado_id',
                as: 'encarregados'
            });
        }
    }

    Aluno.init({
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data_nascimento: DataTypes.DATE,
        sexo: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        documento: DataTypes.STRING,
        endereco: DataTypes.STRING,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Aluno',
        tableName: 'studentss',
        timestamps: true,
        underscored: true
    });

    return Aluno;
};
