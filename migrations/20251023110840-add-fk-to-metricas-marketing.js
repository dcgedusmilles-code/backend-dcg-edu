'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.addConstraint('metricas_marketings', {
      fields: ['id_campanha'],
      type: 'foreign key',
      name: 'fk_metricas_campanhas',
      references: {
        table: 'campaignss',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('metricas_marketings', 'fk_metricas_campanhas');
  }
};
