const service = require('../../../services/secretaria_academica/transfers_service');
const repo = require('../../../repositories/secretaria_academica/transfers_repository');

jest.mock('../../../repositories/secretaria_academica/transfers_repository');

describe('TransferenciaService', () => {
    it('deve listar todas as transferências', async () => {
        repo.findAll.mockResolvedValue([{ id: 1 }]);
        const result = await service.listar();
        expect(result).toEqual([{ id: 1 }]);
    });

    it('deve lançar erro se não encontrar por ID', async () => {
        repo.findById.mockResolvedValue(null);
        await expect(service.buscarPorId(999)).rejects.toThrow('Transferência não encontrada');
    });
});
