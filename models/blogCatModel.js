// models/BCategory.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BCategory = sequelize.define('BCategory', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
}, {
  tableName: 'b_categories',
  timestamps: true,
});

module.exports = BCategory;
