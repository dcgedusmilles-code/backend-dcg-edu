const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/dbConnect");

class Order extends Model {}

Order.init(
  {
    paymentIntent: {
      type: DataTypes.JSON, // ou TEXT se preferir serializar manualmente
    },
    orderStatus: {
      type: DataTypes.ENUM(
        "Not Processed",
        "Cash on Delivery",
        "Processing",
        "Dispatched",
        "Cancelled",
        "Delivered"
      ),
      defaultValue: "Not Processed",
    },
  },
  {
    sequelize,
    modelName: "Order",
    tableName: "orders",
    timestamps: true,
  }
);

module.exports = Order;
