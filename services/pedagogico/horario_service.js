const repo = require("../../repositories/pedagogico/horario_repository");
const { Curso, Unidade, Turma, Professor } = require("../../models");

class HorarioService {
  async create(data) {
    // validações: horas consistentes
    if (!data.dia_semana) throw new Error("Dia da semana é obrigatório.");
    if (!data.inicio_hora || !data.fim_hora)
      throw new Error("Horas de início e fim são obrigatórias.");
    if (data.inicio_hora >= data.fim_hora)
      throw new Error("Hora de início deve ser anterior à hora de fim.");

    if (data.curso_id) {
      const curso = await Curso.findByPk(data.curso_id);
      if (!curso) throw new Error("Curso informado não existe.");
    }
    if (data.unidade_id) {
      const unidade = await Unidade.findByPk(data.unidade_id);
      if (!unidade) throw new Error("Unidade informada não existe.");
    }
    if (data.turma_id) {
      const turma = await Turma.findByPk(data.turma_id);
      if (!turma) throw new Error("Turma informada não existe.");
    }
    if (data.professor_id) {
      const professor = await Professor.findByPk(data.professor_id);
      if (!professor) throw new Error("Professor informado não existe.");
    }

    return repo.create(data);
  }

  async list(filter) {
    return repo.findAll(filter);
  }
  async get(id) {
    const item = await repo.findById(id);
    if (!item) throw new Error("Horário não encontrado");
    return item;
  }
  async update(id, data) {
    return repo.update(id, data);
  }
  async remove(id) {
    return repo.delete(id);
  }
}

module.exports = new HorarioService();
