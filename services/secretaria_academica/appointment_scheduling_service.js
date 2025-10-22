const repository = require('../../repositories/secretaria_academica/appointment_scheduling_repository');

class AgendamentoAtendimentoService {
    async listarTodos() {
        return await repository.findAll();
    }

    async buscarPorId(id) {
        const registro = await repository.findById(id);
        if (!registro) throw new Error('Agendamento não encontrado');
        return registro;
    }

    async criar(dados) {
        return await repository.create(dados);
    }

    async atualizar(id, dados) {
        const atualizado = await repository.update(id, dados);
        if (!atualizado) throw new Error('Agendamento não encontrado');
        return atualizado;
    }

    async excluir(id) {
        const deletado = await repository.delete(id);
        if (!deletado) throw new Error('Agendamento não encontrado');
        return true;
    }
}

module.exports = new AgendamentoAtendimentoService();
