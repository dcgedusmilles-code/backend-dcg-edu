const recursoService = require('../../services/avaliacao_certicacao/assessment_resources_service');

class RecursoAvaliacaoController {
    async findAll(req, res) {
        const recursos = await recursoService.getAll();
        res.json(recursos);
    }

    async findById(req, res) {
        const recurso = await recursoService.getById(req.params.id);
        if (!recurso) return res.status(404).json({ error: "Recurso não encontrado" });
        res.json(recurso);
    }

    async create(req, res) {
        const recurso = await recursoService.create(req.body);
        res.status(201).json(recurso);
    }

    async update(req, res) {
        const recurso = await recursoService.update(req.params.id, req.body);
        if (!recurso) return res.status(404).json({ error: "Recurso não encontrado" });
        res.json(recurso);
    }

    async delete(req, res) {
        const deleted = await recursoService.delete(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Recurso não encontrado" });
        res.status(204).send();
    }
}

module.exports = new RecursoAvaliacaoController();
