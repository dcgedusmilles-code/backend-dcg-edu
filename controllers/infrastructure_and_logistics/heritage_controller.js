const service = require('../../services/infrastructure_and_logistics/heritage_service');

class PatrimonioController {
    async listar(req, res) {
        const data = await service.getAll();
        res.json(data);
    }

    async obter(req, res) {
        try {
            const data = await service.getById(req.params.id);
            res.json(data);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }

    async criar(req, res) {
        try {
            const novo = await service.create(req.body);
            res.status(201).json(novo);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async atualizar(req, res) {
        try {
            const atualizado = await service.update(req.params.id, req.body);
            res.json(atualizado);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }

    async remover(req, res) {
        try {
            await service.delete(req.params.id);
            res.json({ message: 'Patrimônio removido com sucesso' });
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }
}

module.exports = new PatrimonioController();
