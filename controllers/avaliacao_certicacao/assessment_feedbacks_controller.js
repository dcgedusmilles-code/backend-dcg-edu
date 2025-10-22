const service = require('../../services/avaliacao_certicacao/assessment_feedbacks_service');

class FeedbackAvaliacaoController {
    async getAll(req, res) {
        const result = await service.listar();
        res.json(result);
    }

    async getById(req, res) {
        const result = await service.buscarPorId(req.params.id);
        if (!result) return res.status(404).json({ message: 'Feedback não encontrado' });
        res.json(result);
    }

    async create(req, res) {
        const result = await service.criar(req.body);
        res.status(201).json(result);
    }

    async update(req, res) {
        const result = await service.atualizar(req.params.id, req.body);
        res.json(result);
    }

    async delete(req, res) {
        await service.remover(req.params.id);
        res.status(204).send();
    }
}

module.exports = new FeedbackAvaliacaoController();
