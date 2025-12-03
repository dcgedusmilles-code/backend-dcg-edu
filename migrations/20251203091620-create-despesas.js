"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("despesas", {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      descricao: { type: Sequelize.STRING(255), allowNull: true },
      categoria: { type: Sequelize.STRING(100), allowNull: true },
      valor: { type: Sequelize.DECIMAL(14, 2), allowNull: false },
      data_pagamento: { type: Sequelize.DATEONLY, allowNull: false },
      status: {
        type: Sequelize.ENUM("pago", "pendente", "atrasado"),
        allowNull: false,
        defaultValue: "pendente",
      },
      fornecedor: { type: Sequelize.STRING(255), allowNull: true },
      unidade_id: { type: Sequelize.INTEGER, allowNull: true },
      metodo_pagamento: { type: Sequelize.STRING(100), allowNull: true },
      comprovante_url: { type: Sequelize.STRING(1024), allowNull: true },
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
    await queryInterface.addIndex("despesas", ["data_pagamento"]);
    await queryInterface.addIndex("despesas", ["status"]);
  },

  async down(queryInterface) {
    await queryInterface.dropTable("despesas");
  },
};
