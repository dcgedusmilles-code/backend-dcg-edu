const service = require('../../../services/infrastructure_and_logistics/asset_security_service');
const repository = require('../../../repositories/infrastructure_and_logistics/asset_security_repository');

jest.mock('../../../repositories/infrastructure_and_logistics/asset_security_repository');

describe('SegurancaPatrimonialService', () => {
    test('cria um registro com sucesso', async () => {
        const data = { tipo: 'Incidente', descricao: 'Roubo' };
        repository.create.mockResolvedValue(data);
        const result = await service.create(data);
        expect(result).toEqual(data);
    });

    test('lança erro se não encontrar registro', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.getById(999)).rejects.toThrow('Registro não encontrado');
    });
});
