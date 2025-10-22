'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class MetaComercial extends Model {
        static associate(models) {
            MetaComercial.belongsTo(models.Funcionario, { foreignKey: 'id_responsavel', as: 'responsavel' });
        }
    }
    MetaComercial.init({
        descricao: DataTypes.STRING,
        periodo: DataTypes.STRING,
        valor_meta: DataTypes.FLOAT,
        id_responsavel: DataTypes.INTEGER,
        status: DataTypes.STRING
    }, { sequelize,
    modelName: 'MetaComercial',
    tableName: 'meta_comercials',
    timestamps: true,
    
  });
    return MetaComercial;
};
