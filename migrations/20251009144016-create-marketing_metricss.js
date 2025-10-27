// 'use strict';
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('marketing_metricss', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//         id_campanha: {
//           type: Sequelize.INTEGER
//         },
//         alcance: {
//           type: Sequelize.INTEGER
//         },
//         interacoes: {
//           type: Sequelize.INTEGER
//         },
//         conversoes: {
//           type: Sequelize.INTEGER
//         },
//         ROI: {
//           type: Sequelize.FLOAT
//         },
//         periodo_avaliado: {
//           type: Sequelize.STRING
//         },
//         createdAt: {
//           allowNull: false,
//           type: Sequelize.DATE
//         },
//         updatedAt: {
//           allowNull: false,
//           type: Sequelize.DATE
//         }
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable('marketing_metricss');
//   }
// };


'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('metricas_marketings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_campanha: {
        type: Sequelize.INTEGER,
        allowNull: true // permitir null para não travar
      },
      alcance: Sequelize.INTEGER,
      interacoes: Sequelize.INTEGER,
      conversoes: Sequelize.INTEGER,
      ROI: Sequelize.FLOAT,
      periodo_avaliado: Sequelize.STRING,
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('marketing_metricss');
  }
};
