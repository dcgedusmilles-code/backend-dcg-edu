const service = require('../../../services/human_resources/selection_process_service');
const repository = require('../../../repositories/human_resources/selection_process_repository');

jest.mock('../../../repositories/human_resources/selection_process_repository');

describe('ProcessoSeletivoService', () => {
    it('deve criar um processo seletivo', async () => {
        const mock = { vaga_id: 1, candidato_id: 2, status: 'Em análise' };
        repository.create.mockResolvedValue(mock);

        const result = await service.criar(mock);
        expect(result).toEqual(mock);
    });

    it('deve lançar erro ao buscar processo inexistente', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.buscarPorId(99)).rejects.toThrow('Processo seletivo não encontrado');
    });
});
