const repository = require('../../repositories/human_resources/performance_evaluations_repository');

class AvaliacaoDesempenhoService {
    async criarAvaliacao(data) {
        return await repository.create(data);
    }

    async listarAvaliacoes() {
        return await repository.findAll();
    }

    async buscarPorId(id) {
        const avaliacao = await repository.findById(id);
        if (!avaliacao) throw new Error('Avaliação não encontrada');
        return avaliacao;
    }

    async atualizarAvaliacao(id, data) {
        const updated = await repository.update(id, data);
        if (!updated) throw new Error('Avaliação não encontrada para atualização');
        return updated;
    }

    async deletarAvaliacao(id) {
        const deleted = await repository.delete(id);
        if (!deleted) throw new Error('Avaliação não encontrada para exclusão');
        return true;
    }
}

module.exports = new AvaliacaoDesempenhoService();
