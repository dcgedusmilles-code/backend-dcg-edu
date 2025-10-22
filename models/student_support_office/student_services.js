'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AtendimentoEstudante extends Model {
        static associate(models) {
            AtendimentoEstudante.belongsTo(models.Aluno, { foreignKey: 'id_estudante', as: 'estudante' });
            AtendimentoEstudante.belongsTo(models.Funcionario, { foreignKey: 'responsavel', as: 'responsavel_info' });
        }
    }
    AtendimentoEstudante.init({
        id_estudante: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        data_atendimento: DataTypes.DATE,
        responsavel: DataTypes.INTEGER,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'AtendimentoEstudante',
        tableName: 'student_servicess',
        timestamps: true,
        
    });
    return AtendimentoEstudante;
};
