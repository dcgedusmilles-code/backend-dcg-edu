const service = require('../../../services/secretaria_academica/enrollment_service');
const repository = require('../../../repositories/secretaria_academica/enrollment_repository');

jest.mock('../../../repositories/secretaria_academica/enrollment_repository');

describe('MatriculaService', () => {
    it('deve listar todas as matrículas', async () => {
        repository.findAll.mockResolvedValue([{ id: 1 }]);
        const result = await service.listarTodos();
        expect(result).toEqual([{ id: 1 }]);
    });

    it('deve lançar erro ao buscar matrícula inexistente', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.buscarPorId(999)).rejects.toThrow('Matrícula não encontrada');
    });
});
