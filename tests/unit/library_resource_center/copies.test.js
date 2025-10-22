const service = require('../../../services/library_resource_center/copies_service');
const repository = require('../../../repositories/library_resource_center/copies_repository');

jest.mock('../../../repositories/library_resource_center/copies_repository');

describe('ExemplarService', () => {
    it('deve listar todos os exemplares', async () => {
        repository.findAll.mockResolvedValue([{ id: 1, codigo_exemplar: 'EX-001' }]);
        const result = await service.listar();
        expect(result).toHaveLength(1);
    });

    it('deve lançar erro ao buscar exemplar inexistente', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.buscarPorId(999)).rejects.toThrow('Exemplar não encontrado');
    });
});
