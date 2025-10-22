const manutencaoRepository = require('../../repositories/infrastructure_and_logistics/maintenance_repository');

class ManutencaoService {
    async getAll() {
        return await manutencaoRepository.findAll();
    }

    async getById(id) {
        const manutencao = await manutencaoRepository.findById(id);
        if (!manutencao) throw new Error('Manutenção não encontrada');
        return manutencao;
    }

    async create(data) {
        return await manutencaoRepository.create(data);
    }

    async update(id, data) {
        const updated = await manutencaoRepository.update(id, data);
        if (!updated) throw new Error('Manutenção não encontrada para atualização');
        return updated;
    }

    async delete(id) {
        const deleted = await manutencaoRepository.delete(id);
        if (!deleted) throw new Error('Manutenção não encontrada para exclusão');
        return deleted;
    }
}

module.exports = new ManutencaoService();
