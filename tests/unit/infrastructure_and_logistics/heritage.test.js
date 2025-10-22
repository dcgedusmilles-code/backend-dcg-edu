const service = require('../../../services/infrastructure_and_logistics/heritage_service');
const repository = require('../../../repositories/infrastructure_and_logistics/heritage_repository');

jest.mock('../../../repositories/infrastructure_and_logistics/heritage_repository');

describe('PatrimonioService', () => {
    test('deve criar um patrimônio com sucesso', async () => {
        const data = { nome_item: 'Computador', categoria: 'Eletrônico' };
        repository.create.mockResolvedValue(data);

        const result = await service.create(data);
        expect(result).toEqual(data);
    });

    test('deve lançar erro se não encontrar o patrimônio', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.getById(1)).rejects.toThrow('Patrimônio não encontrado');
    });
});
