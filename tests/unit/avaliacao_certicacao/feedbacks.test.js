const feedbackService = require('../../../services/avaliacao_certicacao/feedbacks_service');
const feedbackRepo = require('../../../repositories/avaliacao_certicacao/feedbacks_repository');

jest.mock('../../../repositories/avaliacao_certicacao/feedbacks_repository');

describe('FeedbackService', () => {
    it('deve listar feedbacks', async () => {
        feedbackRepo.findAll.mockResolvedValue([{ id: 1, nota: 5 }]);
        const result = await feedbackService.listar();
        expect(result).toHaveLength(1);
    });

    it('deve criar um feedback', async () => {
        feedbackRepo.create.mockResolvedValue({ id: 1, nota: 5 });
        const result = await feedbackService.criar({ nota: 5 });
        expect(result.nota).toBe(5);
    });
});
