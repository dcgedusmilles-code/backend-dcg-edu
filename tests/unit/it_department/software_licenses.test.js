const licencaSoftwareService = require('../../../services/it_department/software_licenses_service');
const licencaSoftwareRepository = require('../../../repositories/it_department/software_licenses_repository');

jest.mock('../../../repositories/it_department/software_licenses_repository');

describe('LicencaSoftwareService', () => {
    it('deve listar todas as licenças', async () => {
        licencaSoftwareRepository.findAll.mockResolvedValue([{ id: 1, nome_software: 'Office' }]);
        const result = await licencaSoftwareService.listarLicencas();
        expect(result).toHaveLength(1);
    });

    it('deve lançar erro ao buscar licença inexistente', async () => {
        licencaSoftwareRepository.findById.mockResolvedValue(null);
        await expect(licencaSoftwareService.obterLicenca(999)).rejects.toThrow('Licença não encontrada');
    });
});
