const manutencaoService = require('../../../services/infrastructure_and_logistics/maintenance_service');
const manutencaoRepository = require('../../../repositories/infrastructure_and_logistics/maintenance_repository');

jest.mock('../../../repositories/infrastructure_and_logistics/maintenance_repository');

describe('ManutencaoService', () => {
    it('deve retornar todas as manutenções', async () => {
        manutencaoRepository.findAll.mockResolvedValue([{ id: 1, tipo: 'Corretiva' }]);
        const result = await manutencaoService.getAll();
        expect(result).toEqual([{ id: 1, tipo: 'Corretiva' }]);
    });

    it('deve lançar erro se manutenção não encontrada', async () => {
        manutencaoRepository.findById.mockResolvedValue(null);
        await expect(manutencaoService.getById(99)).rejects.toThrow('Manutenção não encontrada');
    });
});
