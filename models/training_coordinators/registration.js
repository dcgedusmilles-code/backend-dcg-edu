'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Inscricao extends Model {
        static associate(models) {
            Inscricao.belongsTo(models.Participante, { foreignKey: 'participante_id', as: 'participante' });
            Inscricao.belongsTo(models.Turma, { foreignKey: 'turma_id', as: 'turma' });
        }
    }
    Inscricao.init({
        participante_id: DataTypes.INTEGER,
        turma_id: DataTypes.INTEGER,
        data_inscricao: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Inscricao',
        tableName: 'registrations',
        timestamps: true,
        underscored: true
    });
    return Inscricao;
};
