const repository = require('../../repositories/library_resource_center/collection_repository');

class ExemplarService {
    async listar() {
        return await repository.findAll();
    }

    async buscarPorId(id) {
        const exemplar = await repository.findById(id);
        if (!exemplar) throw new Error('Exemplar não encontrado');
        return exemplar;
    }

    async criar(data) {
        return await repository.create(data);
    }

    async atualizar(id, data) {
        const atualizado = await repository.update(id, data);
        if (!atualizado) throw new Error('Exemplar não encontrado para atualização');
        return atualizado;
    }

    async remover(id) {
        const removido = await repository.delete(id);
        if (!removido) throw new Error('Exemplar não encontrado para exclusão');
        return removido;
    }
}

module.exports = new ExemplarService();
