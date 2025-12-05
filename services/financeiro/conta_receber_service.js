const ContaReceberRepository = require('../../repositories/financeiro/conta_receber_repository');

class ContaReceberService {
  async listarTodos() {
    return ContaReceberRepository.findAll();
  }
  async findById(id) {
    return ContaReceberRepository.findById(id);
  }

  async criar(data) {
    return ContaReceberRepository.create(data);
  }

  async atualizar(id, data) {
    return ContaReceberRepository.update(id, data);
  }

  async deletar(id) {
    return ContaReceberRepository.delete(id);
  }

  async pendentes() {
    return ContaReceberRepository.findOverdue();
  }

  async totalPendentes() {
    return ContaReceberRepository.sumPending();
  }
}

module.exports = new ContaReceberService();
