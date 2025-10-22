const service = require('../../../services/human_resources/job_recruitment_service');
const repository = require('../../../repositories/human_resources/job_recruitment_repository');

jest.mock('../../../repositories/human_resources/job_recruitment_repository');

describe('RecrutamentoVagaService', () => {
    it('deve criar uma vaga', async () => {
        const mockVaga = { titulo: 'Dev Jr', descricao: 'vaga para dev' };
        repository.create.mockResolvedValue(mockVaga);

        const result = await service.create(mockVaga);
        expect(result).toEqual(mockVaga);
    });

    it('deve listar vagas', async () => {
        const vagas = [{ titulo: 'Dev' }];
        repository.findAll.mockResolvedValue(vagas);

        const result = await service.getAll();
        expect(result).toEqual(vagas);
    });
});
