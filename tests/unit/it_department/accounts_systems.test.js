const contaSistemaService = require('../../../services/it_department/accounts_systems_service');
const contaSistemaRepository = require('../../../repositories/it_department/accounts_systems_repository');

jest.mock('../../../repositories/it_department/accounts_systems_repository');

describe('ContaSistemaService', () => {
    it('deve criar uma nova conta', async () => {
        const mockData = { sistema: 'ERP', username: 'admin' };
        contaSistemaRepository.create.mockResolvedValue(mockData);
        const result = await contaSistemaService.criarConta(mockData);
        expect(result).toEqual(mockData);
    });

    it('deve lançar erro ao buscar conta inexistente', async () => {
        contaSistemaRepository.findById.mockResolvedValue(null);
        await expect(contaSistemaService.obterContaPorId(999))
            .rejects.toThrow('Conta não encontrada');
    });
});
