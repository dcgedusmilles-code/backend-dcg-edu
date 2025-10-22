const criterioAvaliacaoRepository = require('../../repositories/avaliacao_certicacao/evaluation_criteria_repository');

class CriterioAvaliacaoService {
  async getAll(filtros) {
    return criterioAvaliacaoRepository.findAll(filtros);
  }

  async getById(id) {
    const criterio = await criterioAvaliacaoRepository.findById(id);
    if (!criterio) throw new Error('Critério não encontrado');
    return criterio;
  }

  async create(data) {
    return criterioAvaliacaoRepository.create(data);
  }

  async update(id, data) {
    const criterio = await criterioAvaliacaoRepository.update(id, data);
    if (!criterio) throw new Error('Critério não encontrado');
    return criterio;
  }

  async delete(id) {
    const deleted = await criterioAvaliacaoRepository.delete(id);
    if (!deleted) throw new Error('Critério não encontrado');
    return deleted;
  }
}

module.exports = new CriterioAvaliacaoService();
