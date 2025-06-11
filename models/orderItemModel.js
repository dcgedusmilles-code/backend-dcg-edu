const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/dbConnect");

class OrderItem extends Model {}

OrderItem.init(
  {
    count: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    color: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "OrderItem",
    tableName: "order_items",
    timestamps: true,
  }
);

module.exports = OrderItem;
