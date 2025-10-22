const participanteRepository = require('../../repositories/training_coordinators/perticipants_repository');

class ParticipanteService {
    async criar(data) {
        return await participanteRepository.create(data);
    }

    async listar() {
        return await participanteRepository.findAll();
    }

    async obterPorId(id) {
        const participante = await participanteRepository.findById(id);
        if (!participante) throw new Error('Participante não encontrado');
        return participante;
    }

    async atualizar(id, data) {
        const participante = await participanteRepository.update(id, data);
        if (!participante) throw new Error('Participante não encontrado para atualização');
        return participante;
    }

    async excluir(id) {
        const participante = await participanteRepository.delete(id);
        if (!participante) throw new Error('Participante não encontrado para exclusão');
        return participante;
    }
}

module.exports = new ParticipanteService();
