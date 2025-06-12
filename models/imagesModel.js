// models/Image.js
const { DataTypes } = require('sequelize');
const sequelize = require("../config/dbConnect");

const Image = sequelize.define('Image', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  public_id: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'images',
  timestamps: true,
});


module.exports = Image;
