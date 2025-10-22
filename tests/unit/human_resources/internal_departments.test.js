const departamentoInternoService = require('../../../services/human_resources/internal_departments_service');
const departamentoInternoRepository = require('../../../repositories/human_resources/internal_departments_repository');

jest.mock('../../../repositories/human_resources/internal_departments_repository');

describe('DepartamentoInternoService Unit', () => {
    it('deve criar um departamento', async () => {
        const mockDepto = { id: 1, nome: 'Financeiro' };
        departamentoInternoRepository.create.mockResolvedValue(mockDepto);

        const result = await departamentoInternoService.createDepartamento({ nome: 'Financeiro' });
        expect(result).toEqual(mockDepto);
    });
});
