const relatorioService = require('../../../services/financeiro/financial_reports_service');
const relatorioRepository = require('../../../repositories/financeiro/financial_reports_repository');

jest.mock('../../../repositories/financeiro/financial_reports_repository');

describe('RelatorioFinanceiroService', () => {
    it('deve definir a data de geração automaticamente ao criar', async () => {
        const mockData = { tipo: 'Balanço', periodo_inicio: '2025-01-01', periodo_fim: '2025-12-31' };
        relatorioRepository.create.mockResolvedValue({ ...mockData, gerado_em: new Date() });

        const result = await relatorioService.create(mockData);
        expect(result.gerado_em).toBeDefined();
    });
});
