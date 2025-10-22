const localService = require('../../../services/infrastructure_and_logistics/locations_service');
const localRepository = require('../../../repositories/infrastructure_and_logistics/locations_repository');

jest.mock('../../../repositories/infrastructure_and_logistics/locations_repository');

describe('LocalService', () => {
    it('deve retornar todos os locais', async () => {
        localRepository.findAll.mockResolvedValue([{ id: 1, nome_local: 'Armazém Central' }]);
        const result = await localService.getAll();
        expect(result).toEqual([{ id: 1, nome_local: 'Armazém Central' }]);
    });

    it('deve lançar erro se local não encontrado', async () => {
        localRepository.findById.mockResolvedValue(null);
        await expect(localService.getById(99)).rejects.toThrow('Local não encontrado');
    });
});
