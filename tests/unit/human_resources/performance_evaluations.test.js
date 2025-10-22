const service = require('../../../services/human_resources/performance_evaluations_service');
const repository = require('../../../repositories/human_resources/performance_evaluations_repository');

jest.mock('../../../repositories/human_resources/performance_evaluations_repository');

describe('AvaliacaoDesempenhoService', () => {
    it('cria uma avaliação', async () => {
        const mock = { funcionario_id: 1, periodo: '2025-Q1', nota: 9 };
        repository.create.mockResolvedValue(mock);

        const result = await service.criarAvaliacao(mock);
        expect(result).toEqual(mock);
    });

    it('lança erro se não encontrar avaliação', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.buscarPorId(99)).rejects.toThrow('Avaliação não encontrada');
    });
});
