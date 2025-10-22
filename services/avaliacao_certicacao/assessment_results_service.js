const repo = require('../../repositories/avaliacao_certicacao/assessment_results_repository');

class ResultadoAvaliacaoService {
    async getAll() {
        return await repo.findAll();
    }

    async getById(id) {
        const resultado = await repo.findById(id);
        if (!resultado) throw new Error('Resultado não encontrado');
        return resultado;
    }

    async create(data) {
        return await repo.create(data);
    }

    async update(id, data) {
        const updated = await repo.update(id, data);
        if (!updated) throw new Error('Resultado não encontrado para atualizar');
        return updated;
    }

    async delete(id) {
        const deleted = await repo.delete(id);
        if (!deleted) throw new Error('Resultado não encontrado para deletar');
        return true;
    }
}

module.exports = new ResultadoAvaliacaoService();
