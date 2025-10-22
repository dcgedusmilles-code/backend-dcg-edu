const caixaMovimentoService = require('../../../services/financeiro/cash_movements_service');
const caixaMovimentoRepository = require('../../../repositories/financeiro/cash_movements_repository');

jest.mock('../../../repositories/financeiro/cash_movements_repository');

describe('CaixaMovimento Service', () => {
    it('deve criar uma movimentação de caixa', async () => {
        const mockMovimento = { tipo: 'entrada', descricao: 'Venda produto X', valor: 2000 };
        caixaMovimentoRepository.create.mockResolvedValue(mockMovimento);

        const result = await caixaMovimentoService.create(mockMovimento);
        expect(result).toEqual(mockMovimento);
        expect(caixaMovimentoRepository.create).toHaveBeenCalledWith(mockMovimento);
    });
});

