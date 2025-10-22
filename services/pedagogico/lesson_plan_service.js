const planoDeAulaRepository = require('../../repositories/pedagogico/lesson_plan_repository');

class PlanoDeAulaService {
  async criarPlano(data) {
    return await planoDeAulaRepository.create(data);
  }

  async listarPlanos() {
    return await planoDeAulaRepository.findAll();
  }

  async obterPlano(id) {
    const plano = await planoDeAulaRepository.findById(id);
    if (!plano) throw new Error('Plano de aula não encontrado');
    return plano;
  }

  async atualizarPlano(id, data) {
    const updated = await planoDeAulaRepository.update(id, data);
    if (!updated) throw new Error('Plano de aula não encontrado para atualização');
    return updated;
  }

  async deletarPlano(id) {
    const deleted = await planoDeAulaRepository.delete(id);
    if (!deleted) throw new Error('Plano de aula não encontrado para exclusão');
    return deleted;
  }
}

module.exports = new PlanoDeAulaService();
