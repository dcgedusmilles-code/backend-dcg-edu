'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Estagio extends Model {
        static associate(models) {
            Estagio.belongsTo(models.Aluno, { foreignKey: 'id_estudante', as: 'estudante' });
            Estagio.belongsTo(models.EmpresaParceira, { foreignKey: 'id_empresa', as: 'empresa' });
            Estagio.belongsTo(models.Funcionario, { foreignKey: 'supervisor_interno', as: 'supervisorInterno' });
            Estagio.belongsTo(models.SupervisorEmpresa, { foreignKey: 'supervisor_externo', as: 'supervisorExterno' });
            Estagio.hasMany(models.RelatorioEstagio, { foreignKey: 'id_estagio', as: 'relatorios' });
            Estagio.hasMany(models.AvaliacaoEstagio, { foreignKey: 'id_estagio', as: 'avaliacoes' });
        }
    }
    Estagio.init({
        id_estudante: DataTypes.INTEGER,
        id_empresa: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        area_atuacao: DataTypes.STRING,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
        status: DataTypes.STRING,
        supervisor_interno: DataTypes.INTEGER,
        supervisor_externo: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Estagio',
        tableName: 'estagios',
        timestamps: true,
        
    });
    return Estagio;
};
