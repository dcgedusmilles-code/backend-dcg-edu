const estoqueLogisticoRepository = require('../../repositories/infrastructure_and_logistics/stock_logistics_repository');

class EstoqueLogisticoService {
    async create(data) {
        return await estoqueLogisticoRepository.create(data);
    }

    async list() {
        return await estoqueLogisticoRepository.findAll();
    }

    async getById(id) {
        const item = await estoqueLogisticoRepository.findById(id);
        if (!item) throw new Error('Item não encontrado');
        return item;
    }

    async update(id, data) {
        const item = await estoqueLogisticoRepository.update(id, data);
        if (!item) throw new Error('Item não encontrado para atualização');
        return item;
    }

    async delete(id) {
        const success = await estoqueLogisticoRepository.delete(id);
        if (!success) throw new Error('Item não encontrado para exclusão');
        return true;
    }
}

module.exports = new EstoqueLogisticoService();
