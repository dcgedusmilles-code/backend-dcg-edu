const alunoEncarregadoRepository = require('../../repositories/secretaria_academica/student_in _charge_repository');

class StudentInChargeService {
  async listarTodos() {
    const relacoes = await alunoEncarregadoRepository.findAll();
    return relacoes.map((r) => ({
      aluno: r.aluno,
      encarregado: r.encarregado,
      tipo_responsabilidade: r.tipo_responsabilidade,
    }));
  }

  async listarPorAluno(aluno_id) {
    const relacao = await alunoEncarregadoRepository.findByAlunoId(aluno_id);
    if (!relacao) throw new Error('Relação não encontrada');
    return relacao;
  }
}

module.exports = new StudentInChargeService();
