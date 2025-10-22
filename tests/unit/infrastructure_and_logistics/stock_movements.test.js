const movimentacaoEstoqueService = require('../../../services/infrastructure_and_logistics/stock_movements_service');
const movimentacaoEstoqueRepository = require('../../../repositories/infrastructure_and_logistics/stock_movements_repository');

jest.mock('../../../repositories/infrastructure_and_logistics/stock_movements_repository');

describe('MovimentacaoEstoqueService', () => {
    it('deve criar uma movimentação', async () => {
        const mockData = { tipo: 'entrada', quantidade: 10 };
        movimentacaoEstoqueRepository.create.mockResolvedValue(mockData);

        const result = await movimentacaoEstoqueService.create(mockData);
        expect(result).toEqual(mockData);
    });

    it('deve lançar erro se não encontrar movimentação por ID', async () => {
        movimentacaoEstoqueRepository.findById.mockResolvedValue(null);
        await expect(movimentacaoEstoqueService.getById(99))
            .rejects
            .toThrow('Movimentação não encontrada');
    });
});
