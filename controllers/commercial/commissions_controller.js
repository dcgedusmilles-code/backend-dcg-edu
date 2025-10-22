'use strict';

const comissaoService = require('../../services/commercial/commissions_service');

class ComissaoController {
    /**
     * Lista todas as comissões
     */
    async listar(req, res) {
        try {
            const filtros = req.query || {};
            const comissoes = await comissaoService.listarComissoes(filtros);
            res.json(comissoes);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    /**
     * Busca uma comissão pelo ID
     */
    async buscarPorId(req, res) {
        try {
            const comissao = await comissaoService.obterComissao(req.params.id);
            if (!comissao) {
                return res.status(404).json({ message: 'Comissão não encontrada' });
            }
            res.json(comissao);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Cria uma nova comissão
     */
    async criar(req, res) {
        try {
            const comissao = await comissaoService.criarComissao(req.body);
            res.status(201).json(comissao);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Atualiza uma comissão existente
     */
    async atualizar(req, res) {
        try {
            const comissao = await comissaoService.atualizarComissao(req.params.id, req.body);
            if (!comissao) {
                return res.status(404).json({ message: 'Comissão não encontrada' });
            }
            res.json(comissao);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Remove uma comissão
     */
    async remover(req, res) {
        try {
            const deleted = await comissaoService.excluirComissao(req.params.id);
            if (!deleted) {
                return res.status(404).json({ message: 'Comissão não encontrada' });
            }
            res.status(204).send();
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new ComissaoController();
