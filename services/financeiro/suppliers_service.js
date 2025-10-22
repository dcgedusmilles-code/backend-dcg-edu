const fornecedorRepository = require('../../repositories/financeiro/suppliers_repository');

class FornecedorService {
    async createFornecedor(data) {
        return await fornecedorRepository.create(data);
    }

    async getFornecedores() {
        return await fornecedorRepository.findAll();
    }

    async getFornecedorById(id) {
        return await fornecedorRepository.findById(id);
    }

    async updateFornecedor(id, data) {
        return await fornecedorRepository.update(id, data);
    }

    async deleteFornecedor(id) {
        return await fornecedorRepository.delete(id);
    }
}

module.exports = new FornecedorService();
