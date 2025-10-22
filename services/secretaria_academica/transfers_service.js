const transferenciaRepository = require('../../repositories/secretaria_academica/transfers_repository');

class TransferenciaService {
    async listar() {
        return await transferenciaRepository.findAll();
    }

    async buscarPorId(id) {
        const transferencia = await transferenciaRepository.findById(id);
        if (!transferencia) throw new Error('Transferência não encontrada');
        return transferencia;
    }

    async criar(data) {
        return await transferenciaRepository.create(data);
    }

    async atualizar(id, data) {
        const transferencia = await transferenciaRepository.update(id, data);
        if (!transferencia) throw new Error('Transferência não encontrada');
        return transferencia;
    }

    async excluir(id) {
        const deleted = await transferenciaRepository.delete(id);
        if (!deleted) throw new Error('Transferência não encontrada');
        return true;
    }
}

module.exports = new TransferenciaService();
