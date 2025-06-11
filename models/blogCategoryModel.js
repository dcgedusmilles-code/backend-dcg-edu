// models/blogCategoryModel.js
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/dbConnect");

class BlogCategory extends Model {}

BlogCategory.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Adicione outros campos conforme necessário
}, {
  sequelize,
  modelName: "BlogCategory",
  tableName: "blog_categories",
  timestamps: true,
});

module.exports = BlogCategory;
