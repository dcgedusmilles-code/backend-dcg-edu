const movimentacaoEstoqueService = require('../../services/infrastructure_and_logistics/stock_movements_service');

class MovimentacaoEstoqueController {
    async create(req, res) {
        try {
            const novo = await movimentacaoEstoqueService.create(req.body);
            res.status(201).json(novo);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async list(req, res) {
        try {
            const registros = await movimentacaoEstoqueService.list();
            res.status(200).json(registros);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getById(req, res) {
        try {
            const registro = await movimentacaoEstoqueService.getById(req.params.id);
            res.status(200).json(registro);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const registro = await movimentacaoEstoqueService.update(req.params.id, req.body);
            res.status(200).json(registro);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            await movimentacaoEstoqueService.delete(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }
}

module.exports = new MovimentacaoEstoqueController();
