const inadimplenciaService = require('../../../services/financeiro/default_report_service');
const inadimplenciaRepository = require('../../../repositories/financeiro/default_report_repository');

jest.mock('../../../repositories/financeiro/default_report_repository');

describe('InadimplenciaService', () => {
    it('deve criar uma inadimplência', async () => {
        const mockData = { aluno_id: 1, mensalidade_id: 2, dias_atraso: 10, valor_em_aberto: 500, status_negociacao: "pendente" };
        inadimplenciaRepository.create.mockResolvedValue(mockData);

        const result = await inadimplenciaService.create(mockData);
        expect(result).toEqual(mockData);
    });
});
