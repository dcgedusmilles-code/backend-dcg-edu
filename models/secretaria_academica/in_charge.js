'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Encarregado extends Model {
        static associate(models) {
            Encarregado.belongsToMany(models.Aluno, {
                through: models.AlunoEncarregado,
                foreignKey: 'encarregado_id',
                otherKey: 'aluno_id',
                as: 'alunos'
            });
        }
    }

    Encarregado.init({
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefone: DataTypes.STRING,
        email: DataTypes.STRING,
        parentesco: DataTypes.STRING, // Ex: pai, mãe, tio, tutor
        endereco: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Encarregado',
        tableName: 'in_charges',
        timestamps: true,
        underscored: true
    });

    return Encarregado;
};
