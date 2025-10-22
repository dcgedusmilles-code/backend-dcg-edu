const candidatoService = require('../../../services/human_resources/candidates_service');
const candidatoRepository = require('../../../repositories/human_resources/candidates_repository');

jest.mock('../../../repositories/human_resources/candidates_repository');

describe('CandidatoService', () => {
    it('deve criar um candidato', async () => {
        const data = { nome: 'João Silva', email: 'joao@email.com' };
        candidatoRepository.create.mockResolvedValue(data);

        const result = await candidatoService.create(data);
        expect(result).toEqual(data);
    });
});
