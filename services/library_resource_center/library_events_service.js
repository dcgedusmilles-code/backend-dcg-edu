const eventoBibliotecaRepository = require('../../repositories/library_resource_center/library_events_repository');

class EventoBibliotecaService {
    async listar() {
        return await eventoBibliotecaRepository.findAll();
    }

    async buscarPorId(id) {
        const evento = await eventoBibliotecaRepository.findById(id);
        if (!evento) throw new Error('Evento não encontrado');
        return evento;
    }

    async criar(dados) {
        if (!dados.titulo || !dados.tipo || !dados.data_inicio)
            throw new Error('Campos obrigatórios não informados');
        return await eventoBibliotecaRepository.create(dados);
    }

    async atualizar(id, dados) {
        const evento = await eventoBibliotecaRepository.update(id, dados);
        if (!evento) throw new Error('Evento não encontrado');
        return evento;
    }

    async deletar(id) {
        const sucesso = await eventoBibliotecaRepository.delete(id);
        if (!sucesso) throw new Error('Evento não encontrado');
        return true;
    }
}

module.exports = new EventoBibliotecaService();
