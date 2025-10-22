const contaPagarService = require('../../../services/financeiro/accounts_payable_service');
const contaPagarRepository = require('../../../repositories/financeiro/accounts_payable_repository');

jest.mock('../../../repositories/financeiro/accounts_payable_repository');

describe('ContaPagarService', () => {
    it('deve criar uma conta a pagar', async () => {
        const data = { descricao: 'Energia', valor: 500 };
        contaPagarRepository.create.mockResolvedValue(data);

        const result = await contaPagarService.create(data);
        expect(result).toEqual(data);
    });

    it('deve listar todas as contas a pagar', async () => {
        contaPagarRepository.findAll.mockResolvedValue([{ id: 1 }]);
        const result = await contaPagarService.getAll();
        expect(result).toHaveLength(1);
    });
});
