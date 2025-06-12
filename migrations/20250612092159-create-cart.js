'use strict';
module.exports = {
async up(queryInterface, Sequelize) {
await queryInterface.createTable('Carts', {
id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
cartTotal: { type: Sequelize.FLOAT },
totalAfterDiscount: { type: Sequelize.FLOAT },
orderby: { // Assumindo que 'orderby' é o ID do usuário
type: Sequelize.INTEGER,
references: { model: 'Users', key: 'id' },
onUpdate: 'CASCADE',
onDelete: 'CASCADE' // Se o usuário for deletado, o carrinho também
},
createdAt: { allowNull: false, type: Sequelize.DATE },
updatedAt: { allowNull: false, type: Sequelize.DATE }
});
},
async down(queryInterface, Sequelize) {
await queryInterface.dropTable('Carts');
}
};