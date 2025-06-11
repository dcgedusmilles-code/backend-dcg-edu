const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/dbConnect");

class Coupon extends Model { }

Coupon.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  discount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  expiry: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: "Coupon",
  tableName: "coupons",
  timestamps: true,
});

module.exports = Coupon;

