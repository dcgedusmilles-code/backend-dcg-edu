'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Multa extends Model {
        static associate(models) {
            Multa.belongsTo(models.Emprestimo, { foreignKey: 'id_emprestimo', as: 'emprestimo' });
            Multa.belongsTo(models.UsuarioBiblioteca, { foreignKey: 'id_usuario', as: 'usuario' });
            Multa.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' });
        }
    }
    Multa.init({
        id_emprestimo: DataTypes.INTEGER,
        id_usuario: DataTypes.INTEGER,
        aluno_id: DataTypes.INTEGER,
        valor: DataTypes.FLOAT,
        motivo: DataTypes.STRING,
        data_emissao: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Multa',
        tableName: 'finess',
        timestamps: true,
        
    });
    return Multa;
};
