const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnect");

const CartProduct = sequelize.define(
  "CartProduct",
  {
    count: {
      type: DataTypes.INTEGER,
    },
    color: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
  },
  {
    timestamps: false,
    tableName: "cart_products",
  }
);

module.exports = CartProduct;
