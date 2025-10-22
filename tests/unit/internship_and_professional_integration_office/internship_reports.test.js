const relatorioEstagioService = require('../../../services/internship_and_professional_integration_office/internship_reports_service');
const repository = require('../../../repositories/internship_and_professional_integration_office/internship_reports_repository');

jest.mock('../../../repositories/internship_and_professional_integration_office/internship_reports_repository');

describe('RelatorioEstagioService', () => {
    it('deve criar um relatório', async () => {
        const mockData = { titulo: 'Relatório 1' };
        repository.create.mockResolvedValue(mockData);
        const result = await relatorioEstagioService.createRelatorio(mockData);
        expect(result).toEqual(mockData);
    });

    it('deve lançar erro ao buscar relatório inexistente', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(relatorioEstagioService.obterRelatorio(999)).rejects.toThrow('Relatório não encontrado');
    });
});
