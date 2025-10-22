const vendaService = require('../../../services/commercial/sales_service');
const vendaRepository = require('../../../repositories/commercial/sales_repository');

jest.mock('../../../repositories/commercial/sales_repository');

describe('VendaService - Unit Tests', () => {
    it('deve criar uma venda', async () => {
        const mockVenda = { id_cliente: 1, id_produto: 2, quantidade: 3, valor_unitario: 100, valor_total: 300 };
        vendaRepository.create.mockResolvedValue(mockVenda);

        const result = await vendaService.createVenda(mockVenda);

        expect(result).toEqual(mockVenda);
        expect(vendaRepository.create).toHaveBeenCalledWith(mockVenda);
    });
});
