const service = require('../../../services/human_resources/employee_benefits_service');
const repository = require('../../../repositories/human_resources/employee_benefits_repository');

jest.mock('../../../repositories/human_resources/employee_benefits_repository');

describe('FuncionarioBeneficioService', () => {
    it('deve criar vínculo', async () => {
        const data = { funcionario_id: 1, beneficio_id: 2 };
        repository.create.mockResolvedValue(data);

        const result = await service.create(data);
        expect(result).toEqual(data);
    });
});
