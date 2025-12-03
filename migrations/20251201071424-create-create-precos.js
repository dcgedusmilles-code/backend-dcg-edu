'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('precos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      curso_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'cursos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      unidade_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'unidades', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
            material_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'materiais_didaticos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      preco_individual: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
      },
      preco_para_2: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: true
      },
      preco_para_3_ou_mais: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: true
      },
      desconto_percentual: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: true,
        comment: 'Desconto geral em percentagem aplicado quando relevante (ex: 10.00 = 10%).'
      },
      moeda: {
        type: Sequelize.STRING(6),
        allowNull: false,
        defaultValue: 'AOA'
      },
      valido_de: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      valido_ate: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      observacoes: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    await queryInterface.addIndex('precos', ['curso_id']);
    await queryInterface.addIndex('precos', ['unidade_id']);
  },

  async down(queryInterface /* , Sequelize */) {
    await queryInterface.dropTable('precos');
  }
};
