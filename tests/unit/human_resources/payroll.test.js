const service = require('../../../services/human_resources/payroll_service');
const repository = require('../../../repositories/human_resources/payroll_repository');

jest.mock('../../../repositories/human_resources/payroll_repository');

describe('FolhaPagamentoService', () => {
    it('deve criar uma folha de pagamento', async () => {
        const mockData = { funcionario_id: 1, referencia_mes: '2023-09', salario_base: 3000, valor_liquido: 2800 };
        repository.create.mockResolvedValue(mockData);

        const result = await service.create(mockData);
        expect(result).toEqual(mockData);
    });

    it('deve listar folhas de pagamento', async () => {
        const mockData = [{ referencia_mes: '2023-09' }];
        repository.findAll.mockResolvedValue(mockData);

        const result = await service.getAll();
        expect(result).toEqual(mockData);
    });
});
