'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class EmpresaParceira extends Model {
        static associate(models) {
            EmpresaParceira.hasMany(models.VagaEstagio, { foreignKey: 'id_empresa', as: 'vagas' });
            EmpresaParceira.hasMany(models.SupervisorEmpresa, { foreignKey: 'id_empresa', as: 'supervisores' });
            EmpresaParceira.hasMany(models.RelacaoEmpresa, { foreignKey: 'id_empresa', as: 'relacoes' });
            EmpresaParceira.hasMany(models.ProgramaEmpregabilidade, { foreignKey: 'parceiro', as: 'programas' });
        }
    }
    EmpresaParceira.init({
        nome: DataTypes.STRING,
        setor: DataTypes.STRING,
        endereco: DataTypes.STRING,
        telefone: DataTypes.STRING,
        email: DataTypes.STRING,
        contato_responsavel: DataTypes.STRING,
        tipo_parceria: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'EmpresaParceira',
        tableName: 'partner_companiess',
        timestamps: true,
        underscored: true
    });
    return EmpresaParceira;
};
