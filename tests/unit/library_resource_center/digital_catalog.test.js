const service = require('../../../services/library_resource_center/digital_catalog_service');
const repository = require('../../../repositories/library_resource_center/digital_catalog_repository');

jest.mock('../../../repositories/library_resource_center/digital_catalog_repository');

describe('CatalogoDigitalService', () => {
  it('deve listar todos os catálogos digitais', async () => {
    repository.findAll.mockResolvedValue([{ id: 1, titulo: 'Livro A' }]);
    const result = await service.listar();
    expect(result).toHaveLength(1);
  });

  it('deve lançar erro ao buscar catálogo inexistente', async () => {
    repository.findById.mockResolvedValue(null);
    await expect(service.buscarPorId(999)).rejects.toThrow('Catálogo Digital não encontrado');
  });
});
