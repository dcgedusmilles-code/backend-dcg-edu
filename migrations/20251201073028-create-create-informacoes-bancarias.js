"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("informacoes_bancarias", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      unidade_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "unidades", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      banco_nome: { type: Sequelize.STRING(150), allowNull: false },
      banco_codigo: { type: Sequelize.STRING(50), allowNull: true },
      agencia: { type: Sequelize.STRING(50), allowNull: true },
      conta: { type: Sequelize.STRING(100), allowNull: false },
      tipo_conta: { type: Sequelize.STRING(50), allowNull: true },
      titular: { type: Sequelize.STRING(200), allowNull: true },
      titular_documento: { type: Sequelize.STRING(100), allowNull: true },
      iban: { type: Sequelize.STRING(60), allowNull: true },
      swift_bic: { type: Sequelize.STRING(50), allowNull: true },
      moeda: {
        type: Sequelize.STRING(6),
        allowNull: false,
        defaultValue: "AOA",
      },
      observacoes: { type: Sequelize.TEXT, allowNull: true },
      ativo: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
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

    await queryInterface.addIndex("informacoes_bancarias", ["unidade_id"]);
  },

  async down(queryInterface) {
    await queryInterface.dropTable("informacoes_bancarias");
  },
};
