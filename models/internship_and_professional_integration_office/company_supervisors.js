'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SupervisorEmpresa extends Model {
        static associate(models) {
            SupervisorEmpresa.belongsTo(models.EmpresaParceira, { foreignKey: 'id_empresa', as: 'empresa' });
        }
    }
    SupervisorEmpresa.init({
        id_empresa: DataTypes.INTEGER,
        nome: DataTypes.STRING,
        cargo: DataTypes.STRING,
        telefone: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'SupervisorEmpresa',
        tableName: 'company_supervisorss',
        timestamps: true,
        
    });
    return SupervisorEmpresa;
};
