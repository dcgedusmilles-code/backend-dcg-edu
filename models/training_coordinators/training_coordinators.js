'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CoordenadorTreinamento extends Model {
        static associate(models) {
            CoordenadorTreinamento.belongsTo(models.DepartamentoInterno, { foreignKey: 'departamento_id', as: 'departamento' });
            CoordenadorTreinamento.hasMany(models.Curso, { foreignKey: 'coordenador_id', as: 'cursos' });
        }
    }
    CoordenadorTreinamento.init({
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        departamento_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'CoordenadorTreinamento',
        tableName: 'training_coordinatorss',
        timestamps: true,
        underscored: true
    });
    return CoordenadorTreinamento;
};
