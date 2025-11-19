const turmaRepository = require("../../repositories/training_coordinators/class_teacher_repository");
const coordenadorRepository = require('../../repositories/training_coordinators/coordinator_repository');
const cursoRepository = require('../../repositories/training_coordinators/courses_repository');


class TurmaService {
  async listar() {
    return turmaRepository.findAll();
  }

  async obterPorId(id) {
    const turma = await turmaRepository.findById(id);
    if (!turma) throw new Error("Turma não encontrada");
    return turma;
  }

  async criar(dados) {
    const { nome, ano, semestre, curso_id, coordenador_id } = dados;

    // 🔍 1. Validação de campos obrigatórios
    if (!nome || !ano || !semestre || !curso_id || !coordenador_id) {
      throw new Error("Campos obrigatórios ausentes");
    }

    // 🔄 2. Converter IDs para número
    const cursoId = Number(curso_id);
    const coordenadorId = Number(coordenador_id);

    // ❗ Evita validação quebrada por string
    if (isNaN(cursoId)) throw new Error("ID do curso inválido");
    if (isNaN(coordenadorId)) throw new Error("ID do coordenador inválido");

    // 🔍 3. Validar curso existente
    const curso = await cursoRepository.findById(cursoId);
    if (!curso) {
      throw new Error("Curso informado não existe.");
    }

    // 🔍 4. Validar coordenador existente
    const coordenador = await coordenadorRepository.findById(coordenadorId);
    if (!coordenador) {
      throw new Error("Coordenador informado não existe.");
    }

    // 🆗 5. Criar turma com IDs corretamente convertidos
    const novaTurma = await turmaRepository.create({
      nome,
      ano,
      semestre,
      curso_id: cursoId,
      coordenador_id: coordenadorId,
    });

    return novaTurma;
  }

  async atualizar(id, dados) {
    const turma = await turmaRepository.update(id, dados);
    if (!turma) throw new Error("Turma não encontrada");
    return turma;
  }

  async deletar(id) {
    const turma = await turmaRepository.delete(id);
    if (!turma) throw new Error("Turma não encontrada");
    return true;
  }
}

module.exports = new TurmaService();
