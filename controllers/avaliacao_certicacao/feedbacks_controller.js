const feedbackService = require('../../services/avaliacao_certicacao/feedbacks_service');

class FeedbackController {
    async listar(req, res) {
        const feedbacks = await feedbackService.listar();
        console.log("Está testado", feedbacks)
        res.json(feedbacks);
    }

    async buscarPorId(req, res) {
        const feedback = await feedbackService.buscarPorId(req.params.id);
        if (!feedback) return res.status(404).json({ message: 'Feedback não encontrado' });
        res.json(feedback);
    }

    async criar(req, res) {
        const feedback = await feedbackService.criar(req.body);
        res.status(201).json(feedback);
    }

    async atualizar(req, res) {
        const feedback = await feedbackService.atualizar(req.params.id, req.body);
        if (!feedback) return res.status(404).json({ message: 'Feedback não encontrado' });
        res.json(feedback);
    }

    async remover(req, res) {
        const deleted = await feedbackService.remover(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Feedback não encontrado' });
        res.status(204).send();
    }
}

module.exports = new FeedbackController();
