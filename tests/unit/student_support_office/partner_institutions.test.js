'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InstituicaoParceira extends Model {
        static associate(models) {
            InstituicaoParceira.hasMany(models.ProgramaCarreira, { foreignKey: 'parceiro', as: 'programas' });
        }
    }
    InstituicaoParceira.init({
        nome: DataTypes.STRING,
        tipo: DataTypes.STRING,
        contato: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        area_colaboracao: DataTypes.STRING
    }, { sequelize,
    modelName: 'InstituicaoParceira',
    tableName: 'instituicao_parceiras',
    timestamps: true,
    underscored: true
  });
    return InstituicaoParceira;
};
