const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/dbConnect"); // conexão Sequelize

class Upload extends Model {}

Upload.init(
  {
    fileName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fileExt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    file: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Se quiser armazenar o conteúdo do arquivo (como no campo comentado):
    // file: {
    //   type: DataTypes.BLOB("long"), // ou 'medium' / 'tiny'
    //   allowNull: false,
    // },
    // uploadTime: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW,
    // },
  },
  {
    sequelize,
    modelName: "Upload",
    tableName: "uploads",
    timestamps: true, // inclui createdAt e updatedAt
  }
);

module.exports = Upload;
