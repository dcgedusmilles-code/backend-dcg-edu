const oportunidadeService = require('../../../services/commercial/opportunities_service');
const oportunidadeRepository = require('../../../repositories/commercial/opportunities_repository');

jest.mock('../../../repositories/commercial/opportunities_repository');

describe('OportunidadeService - Unit Tests', () => {
    it('deve criar uma oportunidade', async () => {
        const mockOportunidade = { descricao: 'Teste', valor_estimado: 1000 };
        oportunidadeRepository.create.mockResolvedValue(mockOportunidade);

        const result = await oportunidadeService.createOportunidade(mockOportunidade);

        expect(result).toEqual(mockOportunidade);
        expect(oportunidadeRepository.create).toHaveBeenCalledWith(mockOportunidade);
    });
});
