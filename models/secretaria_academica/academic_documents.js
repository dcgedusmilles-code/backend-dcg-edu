'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class DocumentoAcademico extends Model {
        static associate(models) {
            DocumentoAcademico.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' });
        }
    }
    DocumentoAcademico.init({
        aluno_id: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        data_emissao: DataTypes.DATE,
        status: DataTypes.STRING,
        responsavel: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'DocumentoAcademico',
        tableName: 'academic_documentss',
        timestamps: true,
        
    });
    return DocumentoAcademico;
};
