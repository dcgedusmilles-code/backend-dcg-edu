const service = require('../../services/human_resources/payroll_service');

class FolhaPagamentoController {
    async create(req, res) {
        try {
            const folha = await service.create(req.body);
            return res.status(201).json(folha);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const folhas = await service.getAll();
            return res.json(folhas);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const folha = await service.getById(req.params.id);
            if (!folha) return res.status(404).json({ message: 'Folha não encontrada' });
            return res.json(folha);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const folha = await service.update(req.params.id, req.body);
            if (!folha) return res.status(404).json({ message: 'Folha não encontrada' });
            return res.json(folha);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const folha = await service.delete(req.params.id);
            if (!folha) return res.status(404).json({ message: 'Folha não encontrada' });
            return res.json({ message: 'Folha removida com sucesso' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new FolhaPagamentoController();
