'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class FuncionarioSecretaria extends Model {
        static associate(models) {
            // Relacionamento com Secretaria
            FuncionarioSecretaria.belongsTo(models.DepartamentoInterno, {
                foreignKey: 'departamento_id',
                as: 'secretaria'
            });

            // Relacionamento com Funcionário
            FuncionarioSecretaria.belongsTo(models.Funcionario, {
                foreignKey: 'funcionario_id',
                as: 'funcionario'
            });

            // Relacionamento com Agendamento
            FuncionarioSecretaria.hasMany(models.AgendamentoAtendimento, {
                foreignKey: 'aluno_id',
                as: 'agendamentos'
            });
        }
    }

    FuncionarioSecretaria.init({
        departamento_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        funcionario_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'FuncionarioSecretaria',
        tableName: 'secretariat_staffs',
        timestamps: true,
        
    });

    return FuncionarioSecretaria;
};
