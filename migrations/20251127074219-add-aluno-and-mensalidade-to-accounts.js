'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // adicionar aluno_id se não existir
    await queryInterface.addColumn('accounts_receivables', 'aluno_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'studentss', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    // adicionar mensalidade_id se não existir
    await queryInterface.addColumn('accounts_receivables', 'mensalidade_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'monthly_feess', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('accounts_receivables', 'aluno_id');
    await queryInterface.removeColumn('accounts_receivables', 'mensalidade_id');
  }
};
