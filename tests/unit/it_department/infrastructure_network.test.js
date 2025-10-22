const service = require('../../../services/it_department/infrastructure_network_service');
const repository = require('../../../repositories/it_department/infrastructure_network_repository');

jest.mock('../../../repositories/it_department/infrastructure_network_repository');

describe('RedeInfraestruturaService', () => {
    it('deve criar uma rede com sucesso', async () => {
        repository.create.mockResolvedValue({ id: 1, nome: 'Rede Teste' });
        const rede = await service.criarRede({ nome: 'Rede Teste', tipo: 'LAN' });
        expect(rede).toHaveProperty('id');
    });

    it('deve lançar erro se nome estiver ausente', async () => {
        await expect(service.criarRede({ tipo: 'LAN' }))
            .rejects
            .toThrow('Nome e tipo são obrigatórios');
    });
});
