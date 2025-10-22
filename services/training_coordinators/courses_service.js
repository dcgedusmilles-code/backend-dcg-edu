const cursoRepository = require('../../repositories/training_coordinators/courses_repository');

class CursoService {
  async criarCurso(data) {
    return await cursoRepository.create(data);
  }

  async listarCursos() {
    return await cursoRepository.findAll();
  }

  async obterCursoPorId(id) {
    const curso = await cursoRepository.findById(id);
    if (!curso) throw new Error('Curso não encontrado');
    return curso;
  }

  async atualizarCurso(id, data) {
    const curso = await cursoRepository.update(id, data);
    if (!curso) throw new Error('Curso não encontrado para atualização');
    return curso;
  }

  async excluirCurso(id) {
    const curso = await cursoRepository.delete(id);
    if (!curso) throw new Error('Curso não encontrado para exclusão');
    return curso;
  }
}

module.exports = new CursoService();
