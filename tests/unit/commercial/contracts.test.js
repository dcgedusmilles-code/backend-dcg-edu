/**
 * tests/unit/contratoService.test.js
 *
 * Testes unitários para ContratoService — jest
 *
 * Observações:
 * - Mockamos o ContratoRepository para testar a lógica do service isoladamente.
 * - Ajuste os caminhos dos requires conforme sua estrutura de pastas.
 */

const ContratoService = require('../../../services/commercial/contracts_service');

describe('ContratoService (unit)', () => {
    let service;
    let mockContratoRepo;

    beforeEach(() => {
        mockContratoRepo = {
            create: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
        };

        service = new ContratoService({ contratoRepository: mockContratoRepo });
    });

    it('deve criar um contrato com sucesso', async () => {
        const input = {
            id_cliente: 1,
            numero_contrato: 'CT-100',
            descricao: 'Teste contrato',
            valor_total: 1000,
            data_inicio: new Date(),
            id_responsavel: 1
        };

        mockContratoRepo.create.mockResolvedValue({ id: 1, ...input });

        const result = await service.criarContrato(input);

        expect(mockContratoRepo.create).toHaveBeenCalledWith(input);
        expect(result).toHaveProperty('id', 1);
        expect(result.numero_contrato).toBe('CT-100');
    });

    it('deve validar campos obrigatórios ao criar (falta numero_contrato)', async () => {
        const input = {
            id_cliente: 1,
            descricao: 'Sem numero',
            valor_total: 1000,
            data_inicio: new Date(),
            id_responsavel: 1
        };

        await expect(service.criarContrato(input)).rejects.toThrow('Número do contrato é obrigatório');
        expect(mockContratoRepo.create).not.toHaveBeenCalled();
    });

    it('deve listar contratos com filtros', async () => {
        const fakeList = [{ id: 1, numero_contrato: 'CT-001' }];
        mockContratoRepo.findAll.mockResolvedValue(fakeList);

        const result = await service.listarContratos({ status: 'ativo' });

        expect(mockContratoRepo.findAll).toHaveBeenCalledWith({ status: 'ativo' });
        expect(result).toBe(fakeList);
    });

    it('deve lançar erro ao obter contrato inexistente', async () => {
        mockContratoRepo.findById.mockResolvedValue(null);

        await expect(service.obterContrato(999)).rejects.toThrow('Contrato não encontrado');
    });

    it('deve atualizar contrato existente', async () => {
        const existing = { id: 2, numero_contrato: 'CT-002' };
        mockContratoRepo.findById.mockResolvedValue(existing);
        mockContratoRepo.update.mockResolvedValue({ id: 2, numero_contrato: 'CT-002', valor_total: 2000 });

        const result = await service.atualizarContrato(2, { valor_total: 2000 });

        expect(mockContratoRepo.findById).toHaveBeenCalledWith(2);
        expect(mockContratoRepo.update).toHaveBeenCalledWith(2, { valor_total: 2000 });
        expect(result.valor_total).toBe(2000);
    });

    it('deve remover contrato', async () => {
        mockContratoRepo.delete.mockResolvedValue(1);
        const result = await service.excluirContrato(3);
        expect(mockContratoRepo.delete).toHaveBeenCalledWith(3);
        expect(result).toBe(1);
    });
});
