const service = require('../../../services/internship_and_professional_integration_office/company_supervisors_service');
const repository = require('../../../repositories/internship_and_professional_integration_office/company_supervisors_repository');

jest.mock('../../../repositories/internship_and_professional_integration_office/company_supervisors_repository');

describe('SupervisorEmpresaService', () => {
    it('deve listar todos os supervisores', async () => {
        repository.findAll.mockResolvedValue([{ id: 1, nome: 'Carlos' }]);
        const result = await service.listar();
        expect(result).toEqual([{ id: 1, nome: 'Carlos' }]);
    });

    it('deve lançar erro ao buscar supervisor inexistente', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.obterPorId(99)).rejects.toThrow('Supervisor não encontrado');
    });
});
