const RelatorioComercialService = require('../../../services/commercial/commercial_reports_service');

describe('RelatorioComercialService', () => {
    let service, mockRepo;

    beforeEach(() => {
        mockRepo = {
            create: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
        };
        service = new RelatorioComercialService({ relatorioComercialRepository: mockRepo });
    });

    it('deve criar um relatório', async () => {
        mockRepo.create.mockResolvedValue({ id: 1, periodo: '2025-Q1' });
        const relatorio = await service.criarRelatorio({ periodo: '2025-Q1' });
        expect(relatorio.id).toBe(1);
    });

    it('deve lançar erro se relatório não existir', async () => {
        mockRepo.findById.mockResolvedValue(null);
        await expect(service.obterRelatorio(999)).rejects.toThrow('Relatório não encontrado');
    });
});
