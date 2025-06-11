const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/dbConnect");

class Enquiry extends Model { }

Enquiry.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    validate: { isEmail: true },
  },
  subject: {
    type: DataTypes.STRING,
  },
  message: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "pending", // exemplo
  }
}, {
  sequelize,
  modelName: "Enquiry",
  tableName: "enquiries",
  timestamps: true,
});

module.exports = Enquiry;
