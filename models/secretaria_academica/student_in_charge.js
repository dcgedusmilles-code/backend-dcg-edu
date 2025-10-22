'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class AlunoEncarregado extends Model {
        static associate(models) { }
    }

    AlunoEncarregado.init({
        aluno_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        encarregado_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tipo_responsabilidade: {
            type: DataTypes.STRING, // Ex: financeiro, pedagógico, geral
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'AlunoEncarregado',
        tableName: 'student_in_charges',
        timestamps: true,
        underscored: true
    });

    return AlunoEncarregado;
};
