'use strict';
const pesquisaMercadoRepository = require('../../repositories/communication_and_marketing/market_research_repository');

class PesquisaMercadoService {
    async criarPesquisa(data) {
        return await pesquisaMercadoRepository.create(data);
    }

    async listarPesquisas() {
        return await pesquisaMercadoRepository.findAll();
    }

    async obterPesquisa(id) {
        const pesquisa = await pesquisaMercadoRepository.findById(id);
        if (!pesquisa) throw new Error('Pesquisa de mercado não encontrada');
        return pesquisa;
    }

    async atualizarPesquisa(id, data) {
        const pesquisa = await pesquisaMercadoRepository.update(id, data);
        if (!pesquisa) throw new Error('Pesquisa de mercado não encontrada');
        return pesquisa;
    }

    async removerPesquisa(id) {
        const deleted = await pesquisaMercadoRepository.delete(id);
        if (!deleted) throw new Error('Pesquisa de mercado não encontrada');
        return true;
    }
}

module.exports = new PesquisaMercadoService();
