"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // ALUNO
    await queryInterface.changeColumn("enrollments", "aluno_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "studentss", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    // CURSO
    await queryInterface.changeColumn("enrollments", "curso_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "coursess", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    // TURMA
    await queryInterface.changeColumn("enrollments", "turma_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: "classes", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    // Reverte as colunas para versões sem FK
    await queryInterface.changeColumn("enrollments", "aluno_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.changeColumn("enrollments", "curso_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.changeColumn("enrollments", "turma_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },
};
