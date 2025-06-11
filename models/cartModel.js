const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/dbConnect");

class Cart extends Model {}

Cart.init(
  {
    cartTotal: {
      type: DataTypes.FLOAT,
    },
    totalAfterDiscount: {
      type: DataTypes.FLOAT,
    },
  },
  {
    sequelize,
    modelName: "Cart",
    tableName: "carts",
    timestamps: true,
  }
);

module.exports = Cart;
