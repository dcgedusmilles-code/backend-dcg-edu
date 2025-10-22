const LeadService = require('../../services/LeadService');

describe('LeadService', () => {
    let leadRepositoryMock;
    let leadService;

    beforeEach(() => {
        leadRepositoryMock = {
            create: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
        };

        leadService = new LeadService({ leadRepository: leadRepositoryMock });
    });

    it('deve criar um lead com sucesso', async () => {
        const data = { nome: 'João', email: 'joao@email.com' };
        leadRepositoryMock.create.mockResolvedValue(data);

        const result = await leadService.criarLead(data);
        expect(result).toEqual(data);
        expect(leadRepositoryMock.create).toHaveBeenCalledWith(data);
    });

    it('deve lançar erro se nome ou email não forem fornecidos', async () => {
        await expect(leadService.criarLead({})).rejects.toThrow('Nome e email são obrigatórios');
    });

    it('deve listar leads', async () => {
        const leads = [{ id: 1, nome: 'João' }];
        leadRepositoryMock.findAll.mockResolvedValue(leads);

        const result = await leadService.listarLeads();
        expect(result).toEqual(leads);
    });

    it('deve obter um lead pelo id', async () => {
        const lead = { id: 1, nome: 'João' };
        leadRepositoryMock.findById.mockResolvedValue(lead);

        const result = await leadService.obterLead(1);
        expect(result).toEqual(lead);
    });

    it('deve lançar erro se lead não for encontrado', async () => {
        leadRepositoryMock.findById.mockResolvedValue(null);

        await expect(leadService.obterLead(1)).rejects.toThrow('Lead não encontrado');
    });

    it('deve atualizar um lead', async () => {
        const updated = { id: 1, nome: 'Maria' };
        leadRepositoryMock.update.mockResolvedValue(updated);

        const result = await leadService.atualizarLead(1, { nome: 'Maria' });
        expect(result).toEqual(updated);
    });

    it('deve excluir um lead', async () => {
        leadRepositoryMock.delete.mockResolvedValue(1);

        const result = await leadService.excluirLead(1);
        expect(result).toBe(1);
    });
});
