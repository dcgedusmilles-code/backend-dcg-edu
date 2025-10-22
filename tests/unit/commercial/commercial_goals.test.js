const MetaComercialService = require('../../../services/commercial/commercial_goals_service');

describe('MetaComercialService', () => {
    let service, mockRepo;

    beforeEach(() => {
        mockRepo = {
            create: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
        };
        service = new MetaComercialService({ metaComercialRepository: mockRepo });
    });

    it('deve criar uma meta', async () => {
        mockRepo.create.mockResolvedValue({ id: 1, descricao: 'Meta Teste' });
        const meta = await service.criarMeta({ descricao: 'Meta Teste' });
        expect(meta.id).toBe(1);
    });

    it('deve lançar erro se a meta não existir', async () => {
        mockRepo.findById.mockResolvedValue(null);
        await expect(service.obterMeta(999)).rejects.toThrow('MetaComercial não encontrada');
    });
});
