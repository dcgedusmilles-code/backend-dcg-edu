const historicoCertificadoRepository = require('../../repositories/avaliacao_certicacao/certificate_history_repository');

class HistoricoCertificadoService {
  async getAll(filtros) {
    return historicoCertificadoRepository.findAll(filtros);
  }

  async getById(id) {
    const historico = await historicoCertificadoRepository.findById(id);
    if (!historico) throw new Error('Histórico não encontrado');
    return historico;
  }

  async create(data) {
    return historicoCertificadoRepository.create(data);
  }

  async update(id, data) {
    const historico = await historicoCertificadoRepository.update(id, data);
    if (!historico) throw new Error('Histórico não encontrado');
    return historico;
  }

  async delete(id) {
    const deleted = await historicoCertificadoRepository.delete(id);
    if (!deleted) throw new Error('Histórico não encontrado');
    return deleted;
  }
}

module.exports = new HistoricoCertificadoService();
