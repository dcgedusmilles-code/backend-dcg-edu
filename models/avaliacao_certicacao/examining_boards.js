'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class BancaExaminadora extends Model {
        static associate(models) {
            BancaExaminadora.belongsTo(models.Avaliacao, { foreignKey: 'avaliacao_id', as: 'avaliacao' });
            BancaExaminadora.belongsTo(models.Instrutor, { foreignKey: 'instrutor_id', as: 'instrutor' });
        }
    }
    BancaExaminadora.init({
        avaliacao_id: DataTypes.INTEGER,
        instrutor_id: DataTypes.INTEGER,
        funcao: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'BancaExaminadora',
        tableName: 'examining_boardss',
        timestamps: true
    });
    return BancaExaminadora;
};
