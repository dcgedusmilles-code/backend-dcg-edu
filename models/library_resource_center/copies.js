'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Exemplar extends Model {
        static associate(models) {
            Exemplar.belongsTo(models.Acervo, { foreignKey: 'id_item', as: 'item' });
            Exemplar.hasMany(models.Emprestimo, { foreignKey: 'id_exemplar', as: 'emprestimos' });
            Exemplar.hasMany(models.Reserva, { foreignKey: 'id_exemplar', as: 'reservas' });
        }
    }
    Exemplar.init({
        id_item: DataTypes.INTEGER,
        codigo_exemplar: DataTypes.STRING,
        estado: DataTypes.STRING,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Exemplar',
        tableName: 'copiess',
        timestamps: true,
        
    });
    return Exemplar;
};
