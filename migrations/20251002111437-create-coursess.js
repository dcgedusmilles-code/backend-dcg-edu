"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("coursess", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      titulo: {
        type: Sequelize.STRING,
      },
      descricao: {
        type: Sequelize.TEXT,
      },
      carga_horaria: {
        type: Sequelize.INTEGER,
      },
      modalidade: {
        type: Sequelize.STRING,
      },
      nivel: {
        type: Sequelize.STRING,
      },
      coordenador_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "coordinators", 
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("coursess");
  },
};
