const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserWishlist extends Model {
    static associate(models) {
      // associação com User
      UserWishlist.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });

      // associação com Product (opcional se precisar)
      UserWishlist.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product'
      });
    }
  }
  UserWishlist.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserWishlist',
    tableName: 'UserWishlists'
  });
  return UserWishlist;
};
