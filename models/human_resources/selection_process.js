'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProcessoSeletivo extends Model {
        static associate(models) {
            ProcessoSeletivo.belongsTo(models.RecrutamentoVaga, { foreignKey: 'vaga_id', as: 'vaga' });
            ProcessoSeletivo.belongsTo(models.Candidato, { foreignKey: 'candidato_id', as: 'candidato' });
        }
    }
    ProcessoSeletivo.init({
        vaga_id: DataTypes.INTEGER,
        candidato_id: DataTypes.INTEGER,
        status: DataTypes.STRING,
        data_etapa: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'ProcessoSeletivo',
        tableName: 'selection_processs',
    });
    return ProcessoSeletivo;
};
