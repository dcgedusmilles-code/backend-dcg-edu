const relacaoPublicaService = require('../../../services/communication_and_marketing/public_relations_service');
const relacaoPublicaRepository = require('../../../repositories/communication_and_marketing/public_relations_repository');

jest.mock('../../repositories/relacaoPublicaRepository');

describe('RelacaoPublicaService', () => {
    it('deve criar uma relação pública', async () => {
        const rpData = { nome_contato: 'João', instituicao: 'Empresa Z' };
        relacaoPublicaRepository.create.mockResolvedValue(rpData);

        const result = await relacaoPublicaService.create(rpData);
        expect(result).toEqual(rpData);
    });

    it('deve retornar todas as relações públicas', async () => {
        relacaoPublicaRepository.findAll.mockResolvedValue([{ id: 1 }]);
        const result = await relacaoPublicaService.getAll();
        expect(result).toHaveLength(1);
    });
});
