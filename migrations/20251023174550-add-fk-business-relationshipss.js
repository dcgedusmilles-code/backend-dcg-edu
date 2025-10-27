'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.addConstraint('business_relationshipss', {
      fields: ['id_empresa'],
      type: 'foreign key',
      name: 'fk_business_relationshipss_empresa',
      references: {
        table: 'partner_companiess', // tabela referenciada
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('business_relationshipss', 'fk_business_relationshipss_empresa');
  }
};
