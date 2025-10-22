'use strict';
const contaReceberService = require('../../services/financeiro/accounts_receivable_service');

class ContaReceberController {
    async create(req, res) {
        try {
            const conta = await contaReceberService.create(req.body);
            res.status(201).json(conta);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getAll(req, res) {
        try {
            const contas = await contaReceberService.getAll();
            res.json(contas);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getById(req, res) {
        try {
            const conta = await contaReceberService.getById(req.params.id);
            if (!conta) return res.status(404).json({ error: 'Conta não encontrada' });
            res.json(conta);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const conta = await contaReceberService.update(req.params.id, req.body);
            if (!conta) return res.status(404).json({ error: 'Conta não encontrada' });
            res.json(conta);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const conta = await contaReceberService.delete(req.params.id);
            if (!conta) return res.status(404).json({ error: 'Conta não encontrada' });
            res.json({ message: 'Conta removida com sucesso' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new ContaReceberController();
