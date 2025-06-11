const { DataTypes, Model, Sequelize } = require("sequelize");
const sequelize = require("../config/dbConnect");

class Organization extends Model { }
Organization.Sequelize = Sequelize; // necessário para usar Sequelize.Op no controller

Organization.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: { isEmail: true }
  },
  nif: {
    type: DataTypes.STRING,
    unique: true,
  },
  mobile: {
    type: DataTypes.STRING,
    unique: true,
  },
  address: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: "Organization",
  tableName: "organizations",
  timestamps: true,
  underscored: true,
});

module.exports = Organization;
