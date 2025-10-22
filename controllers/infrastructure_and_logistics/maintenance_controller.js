const manutencaoService = require('../../services/infrastructure_and_logistics/maintenance_service');

class ManutencaoController {
    async getAll(req, res) {
        try {
            const manutencoes = await manutencaoService.getAll();
            res.json(manutencoes);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getById(req, res) {
        try {
            const manutencao = await manutencaoService.getById(req.params.id);
            res.json(manutencao);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async create(req, res) {
        try {
            const manutencao = await manutencaoService.create(req.body);
            res.status(201).json(manutencao);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async update(req, res) {
        try {
            const manutencao = await manutencaoService.update(req.params.id, req.body);
            res.json(manutencao);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async delete(req, res) {
        try {
            await manutencaoService.delete(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
}

module.exports = new ManutencaoController();
