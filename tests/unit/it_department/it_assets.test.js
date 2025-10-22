const service = require('../../../services/it_department/it_assets_service');
const repository = require('../../../repositories/it_department/it_assets_repository');

jest.mock('../../../repositories/it_department/it_assets_repository');

describe('AtivoTIService', () => {
    it('deve criar um ativo de TI com sucesso', async () => {
        repository.create.mockResolvedValue({ id: 1, tipo: 'Notebook' });
        const ativo = await service.criarAtivo({ tipo: 'Notebook', descricao: 'Dell Latitude' });
        expect(ativo.id).toBe(1);
    });

    it('deve lançar erro se tipo estiver ausente', async () => {
        await expect(service.criarAtivo({ descricao: 'Sem tipo' }))
            .rejects
            .toThrow('Tipo e descrição são obrigatórios');
    });
});
