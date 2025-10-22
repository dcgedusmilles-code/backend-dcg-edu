const repository = require('../../repositories/internship_and_professional_integration_office/business_relationships_repository');

class RelacaoEmpresaService {
    async listar() {
        return await repository.findAll();
    }

    async obterPorId(id) {
        const item = await repository.findById(id);
        if (!item) throw new Error('Relação não encontrada');
        return item;
    }

    async criar(data) {
        return await repository.create(data);
    }

    async atualizar(id, data) {
        const updated = await repository.update(id, data);
        if (!updated) throw new Error('Relação não encontrada');
        return updated;
    }

    async remover(id) {
        const deleted = await repository.delete(id);
        if (!deleted) throw new Error('Relação não encontrada');
        return true;
    }
}

module.exports = new RelacaoEmpresaService();
