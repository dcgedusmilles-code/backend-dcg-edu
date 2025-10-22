const feedbackRepo = require('../../repositories/avaliacao_certicacao/feedbacks_repository');

class FeedbackService {
    async listar() {
        return await feedbackRepo.findAll();
    }

    async buscarPorId(id) {
        return await feedbackRepo.findById(id);
    }

    async criar(dados) {
        return await feedbackRepo.create(dados);
    }

    async atualizar(id, dados) {
        return await feedbackRepo.update(id, dados);
    }

    async remover(id) {
        return await feedbackRepo.delete(id);
    }
}

module.exports = new FeedbackService();
