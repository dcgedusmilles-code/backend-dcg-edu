'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('units', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: Sequelize.STRING,
      sigla: Sequelize.STRING,
      tipo: Sequelize.STRING,
      descricao: Sequelize.TEXT,
      telefone: Sequelize.STRING,
      email: Sequelize.STRING,
      status: { type: Sequelize.STRING, defaultValue: 'ativo' },

      endereco_id: {
        type: Sequelize.INTEGER,
        references: { model: 'addresses', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },

      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('units');
  }
};
