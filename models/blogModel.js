// models/blogModel.js
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/dbConnect");

class Blog extends Model { }
Blog.init({
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  numViews: { type: DataTypes.INTEGER, defaultValue: 0 },
  categoryId: { type: DataTypes.INTEGER, allowNull: false },
  author: { type: DataTypes.STRING },
  images: { type: DataTypes.JSON },
}, {
  sequelize,
  modelName: "Blog",
  tableName: "blogs",
  timestamps: true,
});
module.exports = Blog;
