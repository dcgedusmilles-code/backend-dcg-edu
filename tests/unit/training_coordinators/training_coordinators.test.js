const service = require('../../../services/training_coordinators/training_coordinators_service');
const repository = require('../../../repositories/training_coordinators/training_coordinators_repository');

jest.mock('../../../repositories/training_coordinators/training_coordinators_repository');

describe('CoordenadorTreinamentoService', () => {
    it('deve listar coordenadores', async () => {
        repository.findAll.mockResolvedValue([{ id: 1, nome: 'João' }]);
        const result = await service.listar();
        expect(result).toEqual([{ id: 1, nome: 'João' }]);
    });

    it('deve lançar erro se coordenador não encontrado', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.buscarPorId(99)).rejects.toThrow('Coordenador de treinamento não encontrado');
    });
});
