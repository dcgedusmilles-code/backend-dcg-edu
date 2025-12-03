"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("contas_pagar", {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      descricao: { type: Sequelize.STRING(255), allowNull: true },
      fornecedor: { type: Sequelize.STRING(255), allowNull: true },
      valor: { type: Sequelize.DECIMAL(14, 2), allowNull: false },
      data_vencimento: { type: Sequelize.DATEONLY, allowNull: false },
      data_pagamento: { type: Sequelize.DATEONLY, allowNull: true },
      status: {
        type: Sequelize.ENUM("pendente", "pago", "vencido"),
        allowNull: false,
        defaultValue: "pendente",
      },
      unidade_id: { type: Sequelize.INTEGER, allowNull: true },
      categoria: { type: Sequelize.STRING(100), allowNull: true },
      observacoes: { type: Sequelize.TEXT, allowNull: true },
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
    await queryInterface.addIndex("contas_pagar", ["data_vencimento"]);
    await queryInterface.addIndex("contas_pagar", ["status"]);
  },

  async down(queryInterface) {
    await queryInterface.dropTable("contas_pagar");
  },
};
