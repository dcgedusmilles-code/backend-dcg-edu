const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/dbConnect");

class Color extends Model { }

Color.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hex: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: "Color",
  tableName: "colors",
  timestamps: true,
});

module.exports = Color;
