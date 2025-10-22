const service = require('../../services/student_support_office/advisors_service');

class OrientadorController {
    async listar(req, res) {
        const data = await service.listar();
        res.json(data);
    }

    async buscar(req, res) {
        try {
            const data = await service.buscarPorId(req.params.id);
            res.json(data);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async criar(req, res) {
        try {
            const data = await service.criar(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const data = await service.atualizar(req.params.id, req.body);
            res.json(data);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async excluir(req, res) {
        try {
            await service.excluir(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new OrientadorController();
