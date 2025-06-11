const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/dbConnect");

class Brand extends Model { }

Brand.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  images: {
    type: DataTypes.JSON, // ou STRING se for um único path
    allowNull: true,
  },
}, {
  sequelize,
  modelName: "Brand",
  tableName: "brands",
  timestamps: true,
});

module.exports = Brand;
