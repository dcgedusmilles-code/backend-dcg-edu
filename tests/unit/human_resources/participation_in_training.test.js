const service = require('../../../services/human_resources/participation_in_training_service');
const repository = require('../../../repositories/human_resources/participation_in_training_repository');

jest.mock('../../../repositories/human_resources/participation_in_training_repository');

describe('ParticipacaoTreinamentoService', () => {
    it('deve criar uma participação', async () => {
        const mockData = { treinamento_id: 1, funcionario_id: 1, status: 'concluido', nota_avaliacao: 8.5 };
        repository.create.mockResolvedValue(mockData);

        const result = await service.create(mockData);
        expect(result).toEqual(mockData);
    });

    it('deve listar participações', async () => {
        const mockData = [{ status: 'em andamento' }];
        repository.findAll.mockResolvedValue(mockData);

        const result = await service.getAll();
        expect(result).toEqual(mockData);
    });
});
