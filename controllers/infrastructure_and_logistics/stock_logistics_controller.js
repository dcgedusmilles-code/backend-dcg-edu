const estoqueLogisticoService = require('../../services/infrastructure_and_logistics/stock_logistics_service');

class EstoqueLogisticoController {
    async create(req, res) {
        try {
            const novo = await estoqueLogisticoService.create(req.body);
            res.status(201).json(novo);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async list(req, res) {
        try {
            const itens = await estoqueLogisticoService.list();
            res.status(200).json(itens);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getById(req, res) {
        try {
            const item = await estoqueLogisticoService.getById(req.params.id);
            res.status(200).json(item);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const item = await estoqueLogisticoService.update(req.params.id, req.body);
            res.status(200).json(item);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            await estoqueLogisticoService.delete(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }
}

module.exports = new EstoqueLogisticoController();
