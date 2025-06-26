'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Portfolio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Portfolio.belongsTo(models.CategoryPortfolio, { foreignKey: 'categoryId', as: 'categoryPortfolio' });
    }
  }
  Portfolio.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    numViews: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
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
    modelName: 'Portfolio',
  });
  return Portfolio;
}; 