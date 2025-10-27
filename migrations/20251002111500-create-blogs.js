'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      slug: {
        type: Sequelize.STRING,
        unique: true
      },
      conteudo: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      resumo: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.JSON
      },
      imagem_capa: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM('rascunho', 'publicado', 'arquivado'),
        defaultValue: 'rascunho'
      },
      publicado_em: {
        type: Sequelize.DATE
      },
      autor_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('blogs');
  }
};


// 'use strict';

// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('blogs', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       titulo: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       slug: {
//         type: Sequelize.STRING,
//         unique: true
//       },
//       conteudo: {
//         type: Sequelize.TEXT,
//         allowNull: false
//       },
//       resumo: {
//         type: Sequelize.STRING,
//         allowNull: true
//       },
//       tags: {
//         type: Sequelize.JSON, // ✅ use JSON no MySQL
//         allowNull: true
//       },
//       imagem_capa: {
//         type: Sequelize.STRING,
//         allowNull: true
//       },
//       status: {
//         type: Sequelize.ENUM('rascunho', 'publicado', 'arquivado'),
//         defaultValue: 'rascunho'
//       },
//       publicado_em: {
//         type: Sequelize.DATE,
//         allowNull: true
//       },
//       autor_id: {
//         type: Sequelize.INTEGER,
//         allowNull: true,
//         references: {
//           model: 'funcionarios',
//           key: 'id'
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'SET NULL'
//       },
//       category_id: {
//         type: Sequelize.INTEGER,
//         allowNull: true,
//         references: {
//           model: 'blogcategories',
//           key: 'id'
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'SET NULL'
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });
//   },

//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable('blogs');
//   }
// };
