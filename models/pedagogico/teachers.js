// 'use strict';
// const { Model } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//     class Professor extends Model {
//         static associate(models) {
//             Professor.belongsTo(models.DepartamentoInterno, { foreignKey: 'departamento_id', as: 'departamento' });
//             Professor.hasMany(models.PlanoDeAula, { foreignKey: 'professor_id', as: 'planos' });
//             Professor.hasMany(models.Aula, { foreignKey: 'professor_id', as: 'aulas' });
//             Professor.hasMany(models.Avaliacao, { foreignKey: 'professor_id', as: 'avaliacoes' });
//         }
//     }
//     Professor.init({
//         nome: DataTypes.STRING,
//         email: DataTypes.STRING,
//         telefone: DataTypes.STRING,
//         formacao: DataTypes.STRING,
//         departamento_id: DataTypes.INTEGER
//     }, {
//         sequelize,
//         modelName: 'Professor',
//         tableName: 'teacherss',
//         timestamps: true,
        
//     });
//     return Professor;
// };

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
    static associate(models) {
      // Relacionamentos
      Professor.belongsTo(models.Unidade, { foreignKey: 'unidade_id', as: 'unidade' });
      Professor.belongsTo(models.Curso, { foreignKey: 'curso_id', as: 'curso' });
      Professor.belongsTo(models.Endereco, { foreignKey: 'endereco_id', as: 'enderecos' });

      Professor.hasMany(models.PlanoDeAula, { foreignKey: 'professor_id', as: 'planos' });
      Professor.hasMany(models.Aula, { foreignKey: 'professor_id', as: 'aulas' });
      Professor.hasMany(models.Avaliacao, { foreignKey: 'professor_id', as: 'avaliacoes' });
    }
  }

  Professor.init(
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      telefone: DataTypes.STRING,
      especialidade: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM('Ativo', 'Inativo'),
        defaultValue: 'Ativo',
      },
      unidade_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'unidades',
          key: 'id',
        },
        allowNull: true,
      },
      curso_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'cursos',
          key: 'id',
        },
        allowNull: true,
      },
      endereco_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'enderecos',
          key: 'id',
        },
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Professor',
      tableName: 'teacherss',
      timestamps: true,
    }
  );

  return Professor;
};
