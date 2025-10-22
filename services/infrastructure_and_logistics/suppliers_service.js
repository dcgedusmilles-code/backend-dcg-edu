const fornecedorRepository = require('../../repositories/infrastructure_and_logistics/suppliers_repository');

class FornecedorService {
    async listar() {
        return await fornecedorRepository.findAll();
    }

    async obterPorId(id) {
        const fornecedor = await fornecedorRepository.findById(id);
        if (!fornecedor) throw new Error('Fornecedor não encontrado');
        return fornecedor;
    }

    async criar(dados) {
        return await fornecedorRepository.create(dados);
    }

    async atualizar(id, dados) {
        const fornecedor = await fornecedorRepository.update(id, dados);
        if (!fornecedor) throw new Error('Fornecedor não encontrado');
        return fornecedor;
    }

    async remover(id) {
        const fornecedor = await fornecedorRepository.delete(id);
        if (!fornecedor) throw new Error('Fornecedor não encontrado');
        return fornecedor;
    }
}

module.exports = new FornecedorService();
