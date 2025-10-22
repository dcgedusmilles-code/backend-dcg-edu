'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    static associate(models) {
      Blog.belongsTo(models.BlogCategory, { foreignKey: 'category_id', as: 'category' });
      Blog.belongsTo(models.Funcionario, { foreignKey: 'autor_id', as: 'autor' });
    }
  }

  Blog.init({
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      unique: true
    },
    conteudo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    resumo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Postgres
      // type: DataTypes.JSON, // MySQL
      allowNull: true
    },
    imagem_capa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('rascunho', 'publicado', 'arquivado'),
      defaultValue: 'rascunho'
    },
    publicado_em: {
      type: DataTypes.DATE,
      allowNull: true
    },
    autor_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Blog',
    tableName: 'blogs',
    timestamps: true
  });

  return Blog;
};
