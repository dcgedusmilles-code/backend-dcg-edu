const CriterioAvaliacaoService = require('../../../services/avaliacao_certicacao/evaluation_criteria_service');

describe('CriterioAvaliacaoService', () => {
    let mockRepo;
    let service;

    beforeEach(() => {
        mockRepo = {
            create: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        };
        service = new CriterioAvaliacaoService(mockRepo);
    });

    it('deve criar critério de avaliação', async () => {
        const data = { avaliacao_id: 1, descricao: 'Teste', peso: 0.5 };
        mockRepo.create.mockResolvedValue(data);

        const result = await service.criarCriterio(data);

        expect(result).toEqual(data);
        expect(mockRepo.create).toHaveBeenCalledWith(data);
    });

    it('deve lançar erro ao não encontrar critério', async () => {
        mockRepo.findById.mockResolvedValue(null);

        await expect(service.obterCriterio(999)).rejects.toThrow('Critério não encontrado');
    });
});
