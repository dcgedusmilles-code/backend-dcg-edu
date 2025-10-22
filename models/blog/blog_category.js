'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class BlogCategory extends Model {
        static associate(models) {
            BlogCategory.hasMany(models.Blog, { foreignKey: 'category_id', as: 'posts' });
        }
    }

    BlogCategory.init({
        nome: { type: DataTypes.STRING, allowNull: false },
        descricao: { type: DataTypes.STRING }
    }, {
        sequelize,
        modelName: 'BlogCategory',
        tableName: 'blogcategories',
        timestamps: true
    });

    return BlogCategory;
};
