const service = require('../../services/training_coordinators/training_plan_service');

class PlanoDeAulaController {
    async getAll(req, res) {
        const planos = await service.listar();
        res.json(planos);
    }

    async getById(req, res) {
        try {
            const plano = await service.buscarPorId(req.params.id);
            res.json(plano);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async create(req, res) {
        try {
            const plano = await service.criar(req.body);
            res.status(201).json(plano);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async update(req, res) {
        try {
            const plano = await service.atualizar(req.params.id, req.body);
            res.json(plano);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async delete(req, res) {
        try {
            await service.excluir(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
}

module.exports = new PlanoDeAulaController();
