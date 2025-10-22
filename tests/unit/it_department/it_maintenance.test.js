const service = require('../../../services/it_department/it_maintenance_service');
const repository = require('../../../repositories/it_department/it_maintenance_repository');

jest.mock('../../../repositories/it_department/it_maintenance_repository');

describe('ManutencaoTIService', () => {
    it('deve criar uma manutenção com sucesso', async () => {
        repository.create.mockResolvedValue({ id: 1, tipo: 'Preventiva' });
        const manutencao = await service.criarManutencao({ ativo_id: 2, tipo: 'Preventiva' });
        expect(manutencao.id).toBe(1);
    });

    it('deve lançar erro se ativo_id não for informado', async () => {
        await expect(service.criarManutencao({ tipo: 'Corretiva' }))
            .rejects
            .toThrow('Ativo e tipo da manutenção são obrigatórios');
    });
});
