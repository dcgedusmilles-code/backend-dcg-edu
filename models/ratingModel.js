const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/dbConnect");

class Rating extends Model {}

Rating.init(
  {
    star: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "Rating",
    tableName: "ratings",
    timestamps: true,
  }
);

module.exports = Rating;
