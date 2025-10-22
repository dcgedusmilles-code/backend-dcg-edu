const HistoricoCertificadoService = require('../../../services/avaliacao_certicacao/certificate_history_service');

describe('HistoricoCertificadoService', () => {
    let mockRepo;
    let service;

    beforeEach(() => {
        mockRepo = {
            create: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        };
        service = new HistoricoCertificadoService(mockRepo);
    });

    it('deve criar um histórico', async () => {
        const data = { certificado_id: 1, acao: 'Criado', responsavel: 'Admin' };
        mockRepo.create.mockResolvedValue(data);

        const result = await service.criarHistorico(data);

        expect(result).toEqual(data);
        expect(mockRepo.create).toHaveBeenCalledWith(data);
    });

    it('deve lançar erro ao não encontrar histórico', async () => {
        mockRepo.findById.mockResolvedValue(null);

        await expect(service.obterHistorico(99)).rejects.toThrow('Histórico não encontrado');
    });
});
