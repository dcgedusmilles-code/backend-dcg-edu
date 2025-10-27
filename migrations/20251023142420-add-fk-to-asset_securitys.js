'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.addConstraint('asset_securitys', {
      fields: ['local'],
      type: 'foreign key',
      name: 'fk_asset_securitys_locais',
      references: { table: 'locals', field: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },
  async down(queryInterface) {
    await queryInterface.removeConstraint('asset_securitys', 'fk_asset_securitys_locais');
  }
};
