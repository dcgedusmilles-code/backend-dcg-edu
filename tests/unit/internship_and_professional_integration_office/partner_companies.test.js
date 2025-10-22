const empresaService = require('../../../services/internship_and_professional_integration_office/partner_companies_service');
const repository = require('../../../repositories/internship_and_professional_integration_office/partner_companies_repository');

jest.mock('../../../repositories/internship_and_professional_integration_office/partner_companies_repository');

describe('EmpresaParceiraService', () => {
    it('deve criar uma empresa', async () => {
        const mockData = { nome: 'Tech Angola' };
        repository.create.mockResolvedValue(mockData);
        const result = await empresaService.criarEmpresa(mockData);
        expect(result).toEqual(mockData);
    });

    it('deve lançar erro se empresa não for encontrada', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(empresaService.obterEmpresa(999)).rejects.toThrow('Empresa parceira não encontrada');
    });
});
