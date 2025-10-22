'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Patrimonio extends Model {
        static associate(models) {
            Patrimonio.belongsTo(models.Local, { foreignKey: 'localizacao', as: 'local' });
            Patrimonio.hasMany(models.Manutencao, { foreignKey: 'id_patrimonio', as: 'manutencoes' });
        }
    }
    Patrimonio.init({
        nome_item: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        numero_tombo: DataTypes.STRING,
        categoria: DataTypes.STRING,
        data_aquisicao: DataTypes.DATE,
        valor_aquisicao: DataTypes.FLOAT,
        estado: DataTypes.STRING,
        localizacao: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Patrimonio',
        tableName: 'heritages',
        timestamps: true,
        underscored: true
    });
    return Patrimonio;
};
