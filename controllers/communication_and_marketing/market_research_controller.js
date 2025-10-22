'use strict';
const pesquisaMercadoService = require('../../services/communication_and_marketing/market_research_service');

class PesquisaMercadoController {
    async create(req, res) {
        try {
            const pesquisa = await pesquisaMercadoService.criarPesquisa(req.body);
            return res.status(201).json(pesquisa);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async getAll(req, res) {
        const pesquisas = await pesquisaMercadoService.listarPesquisas();
        return res.json(pesquisas);
    }

    async getById(req, res) {
        try {
            const pesquisa = await pesquisaMercadoService.obterPesquisa(req.params.id);
            return res.json(pesquisa);
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const pesquisa = await pesquisaMercadoService.atualizarPesquisa(req.params.id, req.body);
            return res.json(pesquisa);
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            await pesquisaMercadoService.removerPesquisa(req.params.id);
            return res.status(204).send();
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}

module.exports = new PesquisaMercadoController();
