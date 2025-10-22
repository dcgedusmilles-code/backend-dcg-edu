const obraInfraestruturaRepository = require('../../repositories/infrastructure_and_logistics/infrastructure_works_repository');

class ObraInfraestruturaService {
    async getAll() {
        return await obraInfraestruturaRepository.findAll();
    }

    async getById(id) {
        const obra = await obraInfraestruturaRepository.findById(id);
        if (!obra) throw new Error('Obra não encontrada');
        return obra;
    }

    async create(data) {
        return await obraInfraestruturaRepository.create(data);
    }

    async update(id, data) {
        const updated = await obraInfraestruturaRepository.update(id, data);
        if (!updated) throw new Error('Obra não encontrada para atualização');
        return updated;
    }

    async delete(id) {
        const deleted = await obraInfraestruturaRepository.delete(id);
        if (!deleted) throw new Error('Obra não encontrada para exclusão');
        return deleted;
    }
}

module.exports = new ObraInfraestruturaService();
