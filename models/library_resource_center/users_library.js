'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class UsuarioBiblioteca extends Model {
        static associate(models) {
            UsuarioBiblioteca.hasMany(models.Emprestimo, { foreignKey: 'id_usuario', as: 'emprestimos' });
            UsuarioBiblioteca.hasMany(models.Reserva, { foreignKey: 'id_usuario', as: 'reservas' });
            UsuarioBiblioteca.hasMany(models.Multa, { foreignKey: 'id_usuario', as: 'multas' });
            UsuarioBiblioteca.hasMany(models.SessaoEstudo, { foreignKey: 'id_usuario', as: 'sessoes' });
            UsuarioBiblioteca.hasMany(models.SugestaoAquisicao, { foreignKey: 'id_usuario', as: 'sugestoes' });
        }
    }
    UsuarioBiblioteca.init({
        id_estudante: DataTypes.INTEGER,
        id_funcionario: DataTypes.INTEGER,
        nome: DataTypes.STRING,
        tipo: DataTypes.STRING,
        contato: DataTypes.STRING,
        data_registro: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'UsuarioBiblioteca',
        tableName: 'users_librarys',
        timestamps: true,
        
    });
    return UsuarioBiblioteca;
};
