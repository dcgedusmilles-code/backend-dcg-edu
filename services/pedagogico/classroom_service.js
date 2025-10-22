const repository = require('../../repositories/pedagogico/classroom_repository');

class AulaService {
  async criarAula(data) {
    return await repository.create(data);
  }

  async listarAulas() {
    return await repository.findAll();
  }

  async obterAula(id) {
    return await repository.findById(id);
  }

  async atualizarAula(id, data) {
    return await repository.update(id, data);
  }

  async deletarAula(id) {
    return await repository.delete(id);
  }
}

module.exports = new AulaService();
