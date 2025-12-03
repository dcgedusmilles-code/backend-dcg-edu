"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("horarios", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      curso_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "cursos", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      unidade_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "unidades", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      turma_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "turmas", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      professor_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "professores", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      dia_semana: {
        type: Sequelize.ENUM(
          "segunda",
          "terca",
          "quarta",
          "quinta",
          "sexta",
          "sabado",
          "domingo"
        ),
        allowNull: false,
      },
      inicio_hora: { type: Sequelize.TIME, allowNull: false },
      fim_hora: { type: Sequelize.TIME, allowNull: false },
      data_inicio: { type: Sequelize.DATEONLY, allowNull: true },
      data_fim: { type: Sequelize.DATEONLY, allowNull: true },
      sala: { type: Sequelize.STRING(100), allowNull: true },
      recorrente: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      observacoes: { type: Sequelize.TEXT, allowNull: true },
      criado_por: { type: Sequelize.INTEGER, allowNull: true }, // opcional: user id
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });

    await queryInterface.addIndex("horarios", ["curso_id"]);
    await queryInterface.addIndex("horarios", ["unidade_id"]);
    await queryInterface.addIndex("horarios", ["turma_id"]);
  },

  async down(queryInterface) {
    await queryInterface.dropTable("horarios");
  },
};
