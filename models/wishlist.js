'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
    static associate(models) {
      // Defina associações aqui se necessário
    }
  }

  Wishlist.init({
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Wishlist',
    tableName: 'wishlists'
  });

  return Wishlist;
};

