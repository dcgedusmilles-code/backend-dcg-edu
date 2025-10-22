'use strict';
const vendaService = require('../../services/commercial/sales_service');

class VendaController {
    async create(req, res) {
        try {
            const venda = await vendaService.createVenda(req.body);
            return res.status(201).json(venda);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const vendas = await vendaService.getAllVendas();
            return res.json(vendas);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const venda = await vendaService.getVendaById(req.params.id);
            if (!venda) return res.status(404).json({ error: 'Venda não encontrada' });
            return res.json(venda);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const venda = await vendaService.updateVenda(req.params.id, req.body);
            if (!venda) return res.status(404).json({ error: 'Venda não encontrada' });
            return res.json(venda);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const deleted = await vendaService.deleteVenda(req.params.id);
            if (!deleted) return res.status(404).json({ error: 'Venda não encontrada' });
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new VendaController();
