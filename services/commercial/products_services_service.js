'use strict';
const produtoServicoRepository = require('../../repositories/commercial/products_services_repository');

class ProdutoServicoService {
    async createProdutoServico(data) {
        return await produtoServicoRepository.create(data);
    }

    async getAllProdutosServicos() {
        return await produtoServicoRepository.findAll();
    }

    async getProdutoServicoById(id) {
        return await produtoServicoRepository.findById(id);
    }

    async updateProdutoServico(id, data) {
        return await produtoServicoRepository.update(id, data);
    }

    async deleteProdutoServico(id) {
        return await produtoServicoRepository.delete(id);
    }
}

module.exports = new ProdutoServicoService();
