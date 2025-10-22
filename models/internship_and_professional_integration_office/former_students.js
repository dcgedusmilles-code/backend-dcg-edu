'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ExAluno extends Model {
        static associate(models) {
            ExAluno.belongsTo(models.Aluno, { foreignKey: 'id_estudante', as: 'estudante' });
        }
    }
    ExAluno.init({
        id_estudante: DataTypes.INTEGER,
        empresa_atual: DataTypes.STRING,
        cargo_atual: DataTypes.STRING,
        data_inicio: DataTypes.DATE,
        status_emprego: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'ExAluno',
        tableName: 'former_studentss',
        timestamps: true,
        underscored: true
    });
    return ExAluno;
};
