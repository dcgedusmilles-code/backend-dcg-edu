'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Blog.belongsTo(models.BCategory, { foreignKey: 'categoryId', as: 'category' });
    }
  }
  Blog.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    numViews: {
      type: DataTypes.INTEGER,
    },
    author: {
      type: DataTypes.STRING,
    },
    images: {
      type: DataTypes.JSON,
    },
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};