'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Adicionar coluna turma_id se não existir
    await queryInterface.addColumn('monthly_feess', 'turma_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'class_teachers',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface) {
    // Remover coluna turma_id
    await queryInterface.removeColumn('monthly_feess', 'turma_id');
  }
};
