const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/dbConnect");

class CategoryProject extends Model {}

CategoryProject.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "CategoryProject",
    tableName: "category_projects",
    timestamps: true,
    underscored: true, // created_at e updated_at, não createdAt e updatedAt
  }
);

module.exports = CategoryProject;

