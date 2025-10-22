const service = require('../../services/training_coordinators/training_coordinators_service');

class CoordenadorTreinamentoController {
    async getAll(req, res) {
        const data = await service.listar();
        res.json(data);
    }

    async getById(req, res) {
        try {
            const data = await service.buscarPorId(req.params.id);
            res.json(data);
        } catch (e) {
            res.status(404).json({ message: e.message });
        }
    }

    async create(req, res) {
        try {
            const data = await service.criar(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    }

    async update(req, res) {
        try {
            const data = await service.atualizar(req.params.id, req.body);
            res.json(data);
        } catch (e) {
            res.status(404).json({ message: e.message });
        }
    }

    async delete(req, res) {
        try {
            await service.excluir(req.params.id);
            res.status(204).send();
        } catch (e) {
            res.status(404).json({ message: e.message });
        }
    }
}

module.exports = new CoordenadorTreinamentoController();
