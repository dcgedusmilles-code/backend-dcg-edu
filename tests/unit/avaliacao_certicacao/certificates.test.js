const CertificadoService = require('../../../services/avaliacao_certicacao/certificates_service');

describe('CertificadoService', () => {
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
        service = new CertificadoService(mockRepo);
    });

    it('deve criar um certificado', async () => {
        const data = { participante_id: 1, curso_id: 1, turma_id: 1, codigo_validacao: 'XYZ123' };
        mockRepo.create.mockResolvedValue(data);

        const result = await service.criarCertificado(data);

        expect(result).toEqual(data);
        expect(mockRepo.create).toHaveBeenCalledWith(data);
    });

    it('deve lançar erro ao não encontrar certificado', async () => {
        mockRepo.findById.mockResolvedValue(null);

        await expect(service.obterCertificado(999)).rejects.toThrow('Certificado não encontrado');
    });
});
