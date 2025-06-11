const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/dbConnect"); // conexão Sequelize

class Product extends Model { }

Product.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      lowercase: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sold: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    images: {
      type: DataTypes.JSON, // armazena array de objetos [{ public_id, url }]
      defaultValue: [],
    },
    color: {
      type: DataTypes.JSON, // pode armazenar array de strings ou objetos
      defaultValue: [],
    },
    tags: {
      type: DataTypes.STRING,
    },
    totalrating: {
      type: DataTypes.STRING,
      defaultValue: "0",
    },
  },
  {
    sequelize,
    modelName: "Product",
    tableName: "products",
    timestamps: true,
  }
);

module.exports = Product;
