const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/dbConnect");

class ProductCategory extends Model {}

ProductCategory.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "ProductCategory",
    tableName: "product_categories",
    timestamps: true,
  }
);

module.exports = ProductCategory;
