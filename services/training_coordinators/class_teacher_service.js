const turmaRepository = require('../../repositories/training_coordinators/class_teacher_repository');

class TurmaService {
  async listar() {
    return turmaRepository.findAll();
  }

  async obterPorId(id) {
    const turma = await turmaRepository.findById(id);
    if (!turma) throw new Error('Turma não encontrada');
    return turma;
  }

  async criar(dados) {
    if (!dados.nome || !dados.ano || !dados.semestre)
      throw new Error('Campos obrigatórios ausentes');
    return turmaRepository.create(dados);
  }

  async atualizar(id, dados) {
    const turma = await turmaRepository.update(id, dados);
    if (!turma) throw new Error('Turma não encontrada');
    return turma;
  }

  async deletar(id) {
    const turma = await turmaRepository.delete(id);
    if (!turma) throw new Error('Turma não encontrada');
    return true;
  }
}

module.exports = new TurmaService();
