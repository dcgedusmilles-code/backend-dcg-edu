const repository = require('../../repositories/library_resource_center/collection_repository');

class AcervoService {
    async listar() {
        return await repository.findAll();
    }

    async buscarPorId(id) {
        const acervo = await repository.findById(id);
        if (!acervo) throw new Error('Item não encontrado');
        return acervo;
    }

    async criar(data) {
        return await repository.create(data);
    }

    async atualizar(id, data) {
        const updated = await repository.update(id, data);
        if (!updated) throw new Error('Item não encontrado para atualização');
        return updated;
    }

    async remover(id) {
        const deleted = await repository.delete(id);
        if (!deleted) throw new Error('Item não encontrado para exclusão');
        return deleted;
    }
}

module.exports = new AcervoService();
