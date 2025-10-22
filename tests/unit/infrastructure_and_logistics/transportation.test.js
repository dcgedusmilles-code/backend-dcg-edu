const transporteService = require('../../../services/infrastructure_and_logistics/transportation_service');
const transporteRepository = require('../../../repositories/infrastructure_and_logistics/transportation_repository');

jest.mock('../../../repositories/infrastructure_and_logistics/transportation_repository');

describe('TransporteService', () => {
    it('deve listar todos os transportes', async () => {
        transporteRepository.findAll.mockResolvedValue([{ id: 1, tipo: 'Caminhão' }]);
        const result = await transporteService.listar();
        expect(result).toHaveLength(1);
    });

    it('deve lançar erro se transporte não encontrado', async () => {
        transporteRepository.findById.mockResolvedValue(null);
        await expect(transporteService.obterPorId(999)).rejects.toThrow('Transporte não encontrado');
    });
});
