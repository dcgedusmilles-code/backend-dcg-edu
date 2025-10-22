const ComissaoService = require('../../../services/commercial/commissions_service');

describe('ComissaoService', () => {
    let service;
    let mockComissaoRepo;
    let mockVendaRepo;

    beforeEach(() => {
        mockComissaoRepo = {
            create: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
        };

        mockVendaRepo = {
            findById: jest.fn()
        };

        service = new ComissaoService({ comissaoRepository: mockComissaoRepo, vendaRepository: mockVendaRepo });
    });

    it('deve criar comissao calculando valor pela venda quando valor não informado', async () => {
        mockVendaRepo.findById.mockResolvedValue({ id: 1, total: 5000 });
        mockComissaoRepo.create.mockResolvedValue({ id: 1, id_venda: 1, percentual: 5, valor: 250 });

        const input = { id_venda: 1, id_funcionario: 1, percentual: 5 };
        const result = await service.criarComissao(input);

        expect(mockVendaRepo.findById).toHaveBeenCalledWith(1);
        expect(mockComissaoRepo.create).toHaveBeenCalled();
        expect(result).toHaveProperty('valor', 250);
    });

    it('deve lançar erro quando falta percentual', async () => {
        await expect(service.criarComissao({ id_venda: 1, id_funcionario: 1 })).rejects.toThrow('Percentual é obrigatório');
    });

    it('deve lançar erro quando comissao não encontrada ao obter', async () => {
        mockComissaoRepo.findById.mockResolvedValue(null);
        await expect(service.obterComissao(999)).rejects.toThrow('Comissão não encontrada');
    });
});
