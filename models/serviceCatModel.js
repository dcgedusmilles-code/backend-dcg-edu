// models/ServiceCatModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnect");

const ServiceCategory = sequelize.define("Category", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "categories",
  timestamps: true,
});

module.exports = ServiceCategory;
