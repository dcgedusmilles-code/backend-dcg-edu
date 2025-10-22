const feriasService = require('../../../services/human_resources/vacation_service');
const feriasRepository = require('../../../repositories/human_resources/vacation_repository');

jest.mock('../../../repositories/human_resources/vacation_repository');

describe('FeriasService', () => {
    it('deve listar todas as férias', async () => {
        feriasRepository.findAll.mockResolvedValue([{ id: 1, status: 'Aprovado' }]);
        const result = await feriasService.listarTodas();
        expect(result).toHaveLength(1);
    });

    it('deve lançar erro ao buscar férias inexistentes', async () => {
        feriasRepository.findById.mockResolvedValue(null);
        await expect(feriasService.buscarPorId(99)).rejects.toThrow('Férias não encontradas');
    });
});
