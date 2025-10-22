'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Ferias extends Model {
        static associate(models) {
            Ferias.belongsTo(models.Funcionario, { foreignKey: 'funcionario_id', as: 'funcionario' });
        }
    }
    Ferias.init({
        funcionario_id: DataTypes.INTEGER,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Ferias',
        tableName: 'vacations',
        timestamps: true,
        
    });
    return Ferias;
};
