const service = require('../../../services/library_resource_center/acquisition_suggestions_service');
const repository = require('../../../repositories/library_resource_center/acquisition_suggestions_repository');

jest.mock('../../../repositories/library_resource_center/acquisition_suggestions_repository');

describe('SugestaoAquisicaoService', () => {
    it('deve listar sugestões', async () => {
        repository.findAll.mockResolvedValue([{ id: 1, titulo_sugerido: 'Clean Code' }]);
        const result = await service.listarSugestoes();
        expect(result).toHaveLength(1);
    });

    it('deve lançar erro se a sugestão não existir', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.obterSugestao(999)).rejects.toThrow('Sugestão não encontrada');
    });
});
