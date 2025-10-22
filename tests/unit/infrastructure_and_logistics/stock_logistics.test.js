const estoqueLogisticoService = require('../../../services/infrastructure_and_logistics/stock_logistics_service');
const estoqueLogisticoRepository = require('../../../repositories/infrastructure_and_logistics/stock_logistics_repository');

jest.mock('../../../repositories/infrastructure_and_logistics/stock_logistics_repository');

describe('EstoqueLogisticoService', () => {
    it('deve criar um item', async () => {
        const mockItem = { nome_item: 'Cimento', quantidade_disponivel: 100 };
        estoqueLogisticoRepository.create.mockResolvedValue(mockItem);

        const result = await estoqueLogisticoService.create(mockItem);
        expect(result).toEqual(mockItem);
    });

    it('deve lançar erro ao buscar item inexistente', async () => {
        estoqueLogisticoRepository.findById.mockResolvedValue(null);
        await expect(estoqueLogisticoService.getById(999)).rejects.toThrow('Item não encontrado');
    });
});
