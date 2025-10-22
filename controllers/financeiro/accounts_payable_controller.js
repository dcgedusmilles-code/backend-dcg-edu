'use strict';
const contaPagarService = require('../../services/financeiro/accounts_payable_service');

class ContaPagarController {
    async create(req, res) {
        try {
            const conta = await contaPagarService.create(req.body);
            return res.status(201).json(conta);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async getAll(req, res) {
        const contas = await contaPagarService.getAll();
        return res.json(contas);
    }

    async getById(req, res) {
        const conta = await contaPagarService.getById(req.params.id);
        if (!conta) return res.status(404).json({ error: 'Conta a pagar não encontrada' });
        return res.json(conta);
    }

    async update(req, res) {
        const conta = await contaPagarService.update(req.params.id, req.body);
        if (!conta) return res.status(404).json({ error: 'Conta a pagar não encontrada' });
        return res.json(conta);
    }

    async delete(req, res) {
        const conta = await contaPagarService.delete(req.params.id);
        if (!conta) return res.status(404).json({ error: 'Conta a pagar não encontrada' });
        return res.json({ message: 'Conta a pagar removida com sucesso' });
    }
}

module.exports = new ContaPagarController();
