const service = require('../../../services/avaliacao_certicacao/assessment_feedbacks_service');
const repo = require('../../../repositories/avaliacao_certicacao/assessment_feedbacks_repository');

jest.mock('../../../repositories/avaliacao_certicacao/assessment_feedbacks_repository');

describe('FeedbackAvaliacaoService', () => {
    it('deve criar um feedback', async () => {
        const mock = { comentario: 'Bom curso', nota: 5 };
        repo.create.mockResolvedValue(mock);
        const result = await service.criar(mock);
        expect(result).toEqual(mock);
    });
});
