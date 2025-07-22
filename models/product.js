'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.ProductCategory, { foreignKey: 'categoryId', as: 'categoryProduct' });
    }
  }
  Product.init({
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    brand: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    sold: DataTypes.INTEGER,
    images: {
      type: DataTypes.JSON,
    },
    color: DataTypes.JSON,
    tags: DataTypes.STRING,
    totalrating: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};