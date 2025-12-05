const ReceitaRepository = require('../../repositories/financeiro/receita_repository');

class ReceitaService {
  async listarTodos() {
    return ReceitaRepository.findAll();
  }

  async criar(data) {
    return ReceitaRepository.create(data);
  }

  async atualizar(id, data) {
    return ReceitaRepository.update(id, data);
  }

  async deletar(id) {
    return ReceitaRepository.delete(id);
  }

  async totalReceitas(periodoInicio, periodoFim) {
    return ReceitaRepository.sumByPeriod(periodoInicio, periodoFim);
  }
}

module.exports = new ReceitaService();
