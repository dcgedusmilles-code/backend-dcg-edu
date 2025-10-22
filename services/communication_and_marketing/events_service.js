'use strict';
const eventoRepository = require('../../repositories/communication_and_marketing/events_repository');

class EventoService {
    async createEvento(data) {
        return await eventoRepository.create(data);
    }

    async listarEventos() {
        return await eventoRepository.findAll();
    }

    async obterEvento(id) {
        const evento = await eventoRepository.findById(id);
        if (!evento) throw new Error('Evento não encontrado');
        return evento;
    }

    async atualizarEvento(id, data) {
        const evento = await eventoRepository.update(id, data);
        if (!evento) throw new Error('Evento não encontrado');
        return evento;
    }

    async removerEvento(id) {
        const deleted = await eventoRepository.delete(id);
        if (!deleted) throw new Error('Evento não encontrado');
        return true;
    }
}

module.exports = new EventoService();
