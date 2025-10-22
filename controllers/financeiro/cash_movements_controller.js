'use strict';
const caixaMovimentoService = require('../../services/financeiro/cash_movements_service');

class CaixaMovimentoController {
    async create(req, res) {
        try {
            const movimento = await caixaMovimentoService.create(req.body);
            res.status(201).json(movimento);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getAll(req, res) {
        try {
            const movimentos = await caixaMovimentoService.getAll();
            res.json(movimentos);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getById(req, res) {
        try {
            const movimento = await caixaMovimentoService.getById(req.params.id);
            if (!movimento) return res.status(404).json({ error: 'Movimento não encontrado' });
            res.json(movimento);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const movimento = await caixaMovimentoService.update(req.params.id, req.body);
            if (!movimento) return res.status(404).json({ error: 'Movimento não encontrado' });
            res.json(movimento);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const movimento = await caixaMovimentoService.delete(req.params.id);
            if (!movimento) return res.status(404).json({ error: 'Movimento não encontrado' });
            res.json({ message: 'Movimento removido com sucesso' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new CaixaMovimentoController();
