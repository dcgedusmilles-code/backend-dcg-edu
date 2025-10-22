'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Emprestimo extends Model {
        static associate(models) {
            Emprestimo.belongsTo(models.Exemplar, { foreignKey: 'id_exemplar', as: 'exemplar' });
            Emprestimo.belongsTo(models.UsuarioBiblioteca, { foreignKey: 'id_usuario', as: 'usuario' });
            Emprestimo.hasOne(models.Multa, { foreignKey: 'id_emprestimo', as: 'multa' });
        }
    }
    Emprestimo.init({
        id_exemplar: DataTypes.INTEGER,
        id_usuario: DataTypes.INTEGER,
        data_emprestimo: DataTypes.DATE,
        data_prevista_devolucao: DataTypes.DATE,
        data_devolucao: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Emprestimo',
        tableName: 'loanss',
        timestamps: true,
        underscored: true
    });
    return Emprestimo;
};
