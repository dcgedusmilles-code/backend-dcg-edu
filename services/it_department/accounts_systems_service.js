const contaSistemaRepository = require('../../repositories/it_department/accounts_systems_repository');

class ContaSistemaService {
    async criarConta(data) {
        return await contaSistemaRepository.create(data);
    }

    async listarContas() {
        return await contaSistemaRepository.findAll();
    }

    async obterContaPorId(id) {
        const conta = await contaSistemaRepository.findById(id);
        if (!conta) throw new Error('Conta não encontrada');
        return conta;
    }

    async atualizarConta(id, data) {
        const conta = await contaSistemaRepository.update(id, data);
        if (!conta) throw new Error('Conta não encontrada');
        return conta;
    }

    async excluirConta(id) {
        const conta = await contaSistemaRepository.delete(id);
        if (!conta) throw new Error('Conta não encontrada');
        return conta;
    }
}

module.exports = new ContaSistemaService();
