'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class BolsaDesconto extends Model {
        static associate(models) {
            BolsaDesconto.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' });
        }
    }
    BolsaDesconto.init({
        aluno_id: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        percentual: DataTypes.FLOAT,
        motivo: DataTypes.STRING,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'BolsaDesconto',
        tableName: 'scholarships_and_discountss',
        timestamps: true,
        underscored: true
    });
    return BolsaDesconto;
};
