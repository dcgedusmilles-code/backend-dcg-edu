const PropostaComercialService = require('../../../services/commercial/commercial_proposals_service');

describe('PropostaComercialService', () => {
    let service, mockRepo;

    beforeEach(() => {
        mockRepo = {
            create: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
        };
        service = new PropostaComercialService({ propostaComercialRepository: mockRepo });
    });

    it('deve criar uma proposta', async () => {
        mockRepo.create.mockResolvedValue({ id: 1, descricao: 'Nova proposta' });
        const proposta = await service.criarProposta({ descricao: 'Nova proposta' });
        expect(proposta.id).toBe(1);
    });

    it('deve lançar erro se proposta não existir', async () => {
        mockRepo.findById.mockResolvedValue(null);
        await expect(service.obterProposta(999)).rejects.toThrow('PropostaComercial não encontrada');
    });
});
