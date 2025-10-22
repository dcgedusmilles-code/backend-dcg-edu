const treinamentoService = require('../../../services/human_resources/trainings_service');
const treinamentoRepository = require('../../../repositories/human_resources/trainings_repository');

jest.mock('../../../repositories/human_resources/trainings_repository');

describe('TreinamentoService', () => {
    it('deve listar todos os treinamentos', async () => {
        treinamentoRepository.findAll.mockResolvedValue([{ id: 1, titulo: 'Curso A' }]);
        const result = await treinamentoService.listarTodos();
        expect(result).toHaveLength(1);
    });

    it('deve lançar erro ao buscar um inexistente', async () => {
        treinamentoRepository.findById.mockResolvedValue(null);
        await expect(treinamentoService.buscarPorId(99)).rejects.toThrow('Treinamento não encontrado');
    });
});
