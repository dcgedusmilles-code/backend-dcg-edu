const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/dbConnect");

class ContactMessage extends Model {}

ContactMessage.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    validate: { isEmail: true },
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: "ContactMessage",
  tableName: "contact_messages",
  timestamps: true,
});

module.exports = ContactMessage;

