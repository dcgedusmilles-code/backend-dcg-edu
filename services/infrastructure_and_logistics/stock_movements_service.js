const movimentacaoEstoqueRepository = require('../../repositories/infrastructure_and_logistics/stock_movements_repository');

class MovimentacaoEstoqueService {
    async create(data) {
        return await movimentacaoEstoqueRepository.create(data);
    }

    async list() {
        return await movimentacaoEstoqueRepository.findAll();
    }

    async getById(id) {
        const registro = await movimentacaoEstoqueRepository.findById(id);
        if (!registro) throw new Error('Movimentação não encontrada');
        return registro;
    }

    async update(id, data) {
        const registro = await movimentacaoEstoqueRepository.update(id, data);
        if (!registro) throw new Error('Movimentação não encontrada para atualização');
        return registro;
    }

    async delete(id) {
        const ok = await movimentacaoEstoqueRepository.delete(id);
        if (!ok) throw new Error('Movimentação não encontrada para exclusão');
        return true;
    }
}

module.exports = new MovimentacaoEstoqueService();
