const service = require('../../services/avaliacao_certicacao/assessment_results_service');

class ResultadoAvaliacaoController {
    async index(req, res) {
        try {
            const resultados = await service.getAll();
            return res.json(resultados);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async show(req, res) {
        try {
            const resultado = await service.getById(req.params.id);
            return res.json(resultado);
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }

    async create(req, res) {
        try {
            const novo = await service.create(req.body);
            return res.status(201).json(novo);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const atualizado = await service.update(req.params.id, req.body);
            return res.json(atualizado);
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            await service.delete(req.params.id);
            return res.status(204).send();
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}

module.exports = new ResultadoAvaliacaoController();
