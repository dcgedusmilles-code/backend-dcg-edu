const DespesaRepository = require('../../repositories/financeiro/despesa_repository');

class DespesaService {
  async listarTodos() {
    return DespesaRepository.findAll();
  }

  async findById(id) {
    return DespesaRepository.findById(id);
  }

  async criar(data) {
    return DespesaRepository.create(data);
  }

  async atualizar(id, data) {
    return DespesaRepository.update(id, data);
  }

  async deletar(id) {
    return DespesaRepository.delete(id);
  }

  async totalDespesas(periodoInicio, periodoFim) {
    return DespesaRepository.sumByPeriod(periodoInicio, periodoFim);
  }
}

module.exports = new DespesaService();
