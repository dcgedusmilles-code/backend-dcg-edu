const salarioService = require('../../../services/financeiro/employee_salaries_service');
const salarioRepository = require('../../../repositories/financeiro/employee_salaries_repository');

jest.mock('../../../repositories/financeiro/employee_salaries_repository');

describe('SalarioFuncionarioService', () => {
    it('deve calcular valor líquido corretamente ao criar', async () => {
        const mockData = { funcionario_id: 1, salario_base: 2000, beneficios: 500, descontos: 200 };
        const expected = { ...mockData, valor_liquido: 2300 };
        salarioRepository.create.mockResolvedValue(expected);

        const result = await salarioService.create(mockData);
        expect(result.valor_liquido).toBe(2300);
    });
});
