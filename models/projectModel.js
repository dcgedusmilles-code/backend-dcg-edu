const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/dbConnect");

class Project extends Model {}

Project.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    images: {
      type: DataTypes.JSON, // Array de imagens (urls, por exemplo)
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryId: {
  type: DataTypes.INTEGER,
  allowNull: false,
},
    client: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
    format: {
      type: DataTypes.STRING,
    },
    downloadFiles: {
      type: DataTypes.JSON, // Array de links
    },
  },
  {
    sequelize,
    modelName: "Project",
    tableName: "projects",
    timestamps: true,
  }
);

module.exports = Project;
