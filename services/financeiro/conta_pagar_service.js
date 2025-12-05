const ContaPagarRepository = require('../../repositories/financeiro/conta_pagar_repository');

class ContaPagarService {
  async listarTodos(filtro = {}) {
    return ContaPagarRepository.findAll(filtro);
  }

  async findById(id) {
    return ContaPagarRepository.findById(id);
  }

  async criar(data) {
    return ContaPagarRepository.create(data);
  }

  async atualizar(id, data) {
    return ContaPagarRepository.update(id, data);
  }

  async deletar(id) {
    return ContaPagarRepository.delete(id);
  }

  async pendentes() {
    return ContaPagarRepository.getPendentes();
  }

  async totalPendentes() {
    return ContaPagarRepository.sumPendentes();
  }

  async vencidas(filter = {}) {
    return ContaPagarRepository.findOverdue(filter);
  }

  async listarPorPeriodo(startDate, endDate, filter = {}) {
    return ContaPagarRepository.findList(startDate, endDate, filter);
  }

  async totalPendentesPorPeriodo(startDate, endDate, filter = {}) {
    return ContaPagarRepository.sumPending(startDate, endDate, filter);
  }
}

module.exports = new ContaPagarService();
