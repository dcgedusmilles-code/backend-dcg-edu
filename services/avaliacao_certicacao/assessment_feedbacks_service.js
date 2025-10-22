const feedbackRepo = require('../../repositories/avaliacao_certicacao/assessment_feedbacks_repository');

class FeedbackAvaliacaoService {
    async listar() {
        return feedbackRepo.findAll();
    }

    async buscarPorId(id) {
        return feedbackRepo.findById(id);
    }

    async criar(data) {
        return feedbackRepo.create(data);
    }

    async atualizar(id, data) {
        return feedbackRepo.update(id, data);
    }

    async remover(id) {
        return feedbackRepo.delete(id);
    }
}

module.exports = new FeedbackAvaliacaoService();
