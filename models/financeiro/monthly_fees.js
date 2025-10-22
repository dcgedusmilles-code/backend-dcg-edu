'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Mensalidade extends Model {
        static associate(models) {
            Mensalidade.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' });
            Mensalidade.belongsTo(models.Curso, { foreignKey: 'curso_id', as: 'curso' });
            Mensalidade.hasMany(models.Inadimplencia, { foreignKey: 'mensalidade_id', as: 'inadimplencias' });
        }
    }
    Mensalidade.init({
        aluno_id: DataTypes.INTEGER,
        curso_id: DataTypes.INTEGER,
        valor: DataTypes.FLOAT,
        data_vencimento: DataTypes.DATE,
        data_pagamento: DataTypes.DATE,
        status: DataTypes.STRING,
        forma_pagamento: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Mensalidade',
        tableName: 'monthly_feess',
        timestamps: true,
        
    });
    return Mensalidade;
};
