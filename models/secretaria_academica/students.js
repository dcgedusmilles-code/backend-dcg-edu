'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    static associate(models) {
      Aluno.belongsTo(models.Unidade, { foreignKey: 'unidade_id', as: 'unidade' });
      Aluno.belongsTo(models.Turma, { foreignKey: 'turma_id', as: 'turma' });

      // Relações financeiras
      Aluno.hasMany(models.Mensalidade, { foreignKey: 'aluno_id', as: 'mensalidades' });
      Aluno.hasMany(models.ContaReceber, { foreignKey: 'aluno_id', as: 'contas' });

      // Relacionamentos já existentes
      Aluno.hasMany(models.Matricula, { foreignKey: 'aluno_id', as: 'matriculas' });
      Aluno.hasMany(models.HistoricoAcademico, { foreignKey: 'aluno_id', as: 'historicos' });
      Aluno.hasMany(models.DocumentoAcademico, { foreignKey: 'aluno_id', as: 'documentos' });
      Aluno.hasMany(models.Transferencia, { foreignKey: 'aluno_id', as: 'transferencias' });
      Aluno.hasMany(models.Protocolo, { foreignKey: 'aluno_id', as: 'protocolos' });
      Aluno.hasMany(models.AgendamentoAtendimento, { foreignKey: 'aluno_id', as: 'agendamentos' });

      // Relação com encarregados
      Aluno.belongsToMany(models.Encarregado, {
        through: models.AlunoEncarregado,
        foreignKey: 'aluno_id',
        otherKey: 'encarregado_id',
        as: 'encarregados'
      });
    }
  }

  Aluno.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    unidade_id: DataTypes.INTEGER,
    turma_id: DataTypes.INTEGER,

    data_nascimento: DataTypes.DATE,
    sexo: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    documento: DataTypes.STRING,
    endereco: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Aluno',
    tableName: 'studentss',
    timestamps: true
  });

  return Aluno;
};
