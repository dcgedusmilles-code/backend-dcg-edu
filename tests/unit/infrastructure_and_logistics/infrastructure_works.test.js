const obraInfraestruturaService = require('../../../services/infrastructure_and_logistics/infrastructure_works_service');
const obraInfraestruturaRepository = require('../../../repositories/infrastructure_and_logistics/infrastructure_works_repository');

jest.mock('../../../repositories/infrastructure_and_logistics/infrastructure_works_repository');

describe('ObraInfraestruturaService', () => {
    it('deve retornar todas as obras', async () => {
        obraInfraestruturaRepository.findAll.mockResolvedValue([{ id: 1 }]);
        const result = await obraInfraestruturaService.getAll();
        expect(result).toEqual([{ id: 1 }]);
    });

    it('deve lançar erro se obra não encontrada', async () => {
        obraInfraestruturaRepository.findById.mockResolvedValue(null);
        await expect(obraInfraestruturaService.getById(999)).rejects.toThrow('Obra não encontrada');
    });
});
