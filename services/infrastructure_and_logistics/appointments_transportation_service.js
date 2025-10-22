const repository = require('../../repositories/infrastructure_and_logistics/appointments_transportation_repository');

class AgendamentoTransporteService {
  async listarTodos() {
    return await repository.findAll();
  }

  async buscarPorId(id) {
    const registro = await repository.findById(id);
    if (!registro) throw new Error('Agendamento de transporte não encontrado');
    return registro;
  }

  async criar(dados) {
    return await repository.create(dados);
  }

  async atualizar(id, dados) {
    const atualizado = await repository.update(id, dados);
    if (!atualizado) throw new Error('Agendamento de transporte não encontrado');
    return atualizado;
  }

  async deletar(id) {
    const deletado = await repository.delete(id);
    if (!deletado) throw new Error('Agendamento de transporte não encontrado');
    return deletado;
  }
}

module.exports = new AgendamentoTransporteService();
