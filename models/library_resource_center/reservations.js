'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Reserva extends Model {
        static associate(models) {
            Reserva.belongsTo(models.Exemplar, { foreignKey: 'id_exemplar', as: 'exemplar' });
            Reserva.belongsTo(models.UsuarioBiblioteca, { foreignKey: 'id_usuario', as: 'usuario' });
        }
    }
    Reserva.init({
        id_exemplar: DataTypes.INTEGER,
        id_usuario: DataTypes.INTEGER,
        data_reserva: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Reserva',
        tableName: 'reserva',
        timestamps: true,
        underscored: true
    });
    return Reserva;
};
