'use strict';
const produtoServicoService = require('../../services/commercial/products_services_service');

class ProdutoServicoController {
    async criar(req, res) {
        try {
            const produto = await produtoServicoService.createProdutoServico(req.body);
            return res.status(201).json(produto);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async listar(req, res) {
        try {
            const produtos = await produtoServicoService.getAllProdutosServicos();
            return res.json(produtos);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async buscarPorId(req, res) {
        try {
            const produto = await produtoServicoService.getProdutoServicoById(req.params.id);
            if (!produto) return res.status(404).json({ error: 'Produto/Serviço não encontrado' });
            return res.json(produto);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const produto = await produtoServicoService.updateProdutoServico(req.params.id, req.body);
            if (!produto) return res.status(404).json({ error: 'Produto/Serviço não encontrado' });
            return res.json(produto);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async remover(req, res) {
        try {
            const deleted = await produtoServicoService.deleteProdutoServico(req.params.id);
            if (!deleted) return res.status(404).json({ error: 'Produto/Serviço não encontrado' });
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ProdutoServicoController();
