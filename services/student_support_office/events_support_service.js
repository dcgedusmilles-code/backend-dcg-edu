const eventoApoioRepository = require('../../repositories/student_support_office/events_support_repository');

class EventoApoioService {
    async listar() {
        return await eventoApoioRepository.findAll();
    }

    async obterPorId(id) {
        const evento = await eventoApoioRepository.findById(id);
        if (!evento) throw new Error('Evento de apoio não encontrado');
        return evento;
    }

    async criar(dados) {
        return await eventoApoioRepository.create(dados);
    }

    async atualizar(id, dados) {
        const atualizado = await eventoApoioRepository.update(id, dados);
        if (!atualizado) throw new Error('Não foi possível atualizar o evento');
        return atualizado;
    }

    async excluir(id) {
        const apagado = await eventoApoioRepository.delete(id);
        if (!apagado) throw new Error('Evento não encontrado para exclusão');
        return apagado;
    }
}

module.exports = new EventoApoioService();
