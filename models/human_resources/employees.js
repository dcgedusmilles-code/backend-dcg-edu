'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Funcionario extends Model {
        static associate(models) {
            Funcionario.belongsTo(models.Cargo, { foreignKey: 'cargo_id', as: 'cargo' });
            Funcionario.hasMany(models.ContratoTrabalho, { foreignKey: 'funcionario_id', as: 'contratos' });
            Funcionario.hasMany(models.FolhaPagamento, { foreignKey: 'funcionario_id', as: 'folhas' });
            Funcionario.hasMany(models.Ferias, { foreignKey: 'funcionario_id', as: 'ferias' });
            Funcionario.hasMany(models.ParticipacaoTreinamento, { foreignKey: 'funcionario_id', as: 'treinamentos' });
            Funcionario.hasMany(models.AvaliacaoDesempenho, { foreignKey: 'funcionario_id', as: 'avaliacoes' });
            Funcionario.hasMany(models.AdvertenciaDisciplina, { foreignKey: 'funcionario_id', as: 'advertencias' });
        }
    }
    Funcionario.init({
        nome: DataTypes.STRING,
        data_nascimento: DataTypes.DATE,
        sexo: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        documento: DataTypes.STRING,
        endereco: DataTypes.STRING,
        data_admissao: DataTypes.DATE,
        data_demissao: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Funcionario',
        tableName: 'employeess',
        timestamps: true,
        underscored: true
    });
    return Funcionario;
};
