const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnect");

class Wishlist extends Model {}

Wishlist.init({
  // campos do wishlist
  productId: DataTypes.INTEGER,
  userId: DataTypes.INTEGER,
}, {
  sequelize,
  modelName: "Wishlist",
  tableName: "wishlists"
});

module.exports = Wishlist;
