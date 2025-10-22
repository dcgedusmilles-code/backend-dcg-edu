const avaliacaoRepository = require('../../repositories/avaliacao_certicacao/assessment_repository');

class AvaliacaoService {
  async getAll() {
    return avaliacaoRepository.findAll();
  }

  async getById(id) {
    const avaliacao = await avaliacaoRepository.findById(id);
    if (!avaliacao) throw new Error('Avaliação não encontrada');
    return avaliacao;
  }

  async create(data) {
    return avaliacaoRepository.create(data);
  }

  async update(id, data) {
    const avaliacao = await avaliacaoRepository.update(id, data);
    if (!avaliacao) throw new Error('Avaliação não encontrada');
    return avaliacao;
  }

  async delete(id) {
    const deleted = await avaliacaoRepository.delete(id);
    if (!deleted) throw new Error('Avaliação não encontrada');
    return deleted;
  }
}

module.exports = new AvaliacaoService();
