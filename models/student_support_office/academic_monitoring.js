'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AcompanhamentoAcademico extends Model {
        static associate(models) {
            AcompanhamentoAcademico.belongsTo(models.Aluno, { foreignKey: 'id_estudante', as: 'estudante' });
        }
    }
    AcompanhamentoAcademico.init({
        id_estudante: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'AcompanhamentoAcademico',
        tableName: 'academic_monitorings',
        timestamps: true,
        underscored: true
    });
    return AcompanhamentoAcademico;
};
