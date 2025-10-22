const contaReceberService = require('../../../services/financeiro/accounts_receivable_service');
const contaReceberRepository = require('../../../repositories/financeiro/accounts_receivable_repository');

jest.mock('../../../repositories/financeiro/accounts_receivable_repository');

describe('ContaReceber Service', () => {
    it('deve criar uma conta a receber', async () => {
        const mockConta = { descricao: 'Venda produto X', valor: 5000 };
        contaReceberRepository.create.mockResolvedValue(mockConta);

        const result = await contaReceberService.create(mockConta);
        expect(result).toEqual(mockConta);
        expect(contaReceberRepository.create).toHaveBeenCalledWith(mockConta);
    });
});
