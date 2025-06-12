// models/ServiceModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnect");

const Service = sequelize.define("Service", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "services",
  timestamps: true,
});

// Relacionamento belongsTo

module.exports = Service;
