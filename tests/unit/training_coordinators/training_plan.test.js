const service = require('../../../services/training_coordinators/training_plan_service');
const repository = require('../../../repositories/training_coordinators/training_plan_repository');

jest.mock('../../../repositories/training_coordinators/training_plan_repository');

describe('PlanoDeAulaService', () => {
    it('deve listar planos de aula', async () => {
        repository.findAll.mockResolvedValue([{ id: 1, titulo: 'Plano 1' }]);
        const result = await service.listar();
        expect(result).toEqual([{ id: 1, titulo: 'Plano 1' }]);
    });

    it('deve lançar erro se plano não encontrado', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.buscarPorId(99)).rejects.toThrow('Plano de aula não encontrado');
    });
});
