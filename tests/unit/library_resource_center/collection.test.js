const service = require('../../../services/library_resource_center/collection_service');
const repository = require('../../../repositories/library_resource_center/collection_repository');

jest.mock('../../../repositories/library_resource_center/collection_repository');

describe('AcervoService', () => {
    it('deve listar todos os acervos', async () => {
        repository.findAll.mockResolvedValue([{ id: 1, titulo: 'Livro X' }]);
        const result = await service.listar();
        expect(result).toHaveLength(1);
    });

    it('deve lançar erro ao buscar ID inexistente', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.buscarPorId(99)).rejects.toThrow('Item não encontrado');
    });
});
