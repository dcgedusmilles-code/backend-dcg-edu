const inscricaoService = require('../../../services/training_coordinators/registration_service');
const inscricaoRepository = require('../../../repositories/training_coordinators/registration_repository');

jest.mock('../../../repositories/training_coordinators/registration_repository');

describe('InscricaoService', () => {
    it('deve listar inscrições', async () => {
        inscricaoRepository.findAll.mockResolvedValue([{ id: 1 }]);
        const result = await inscricaoService.listar();
        expect(result).toEqual([{ id: 1 }]);
    });

    it('deve lançar erro se inscrição não encontrada', async () => {
        inscricaoRepository.findById.mockResolvedValue(null);
        await expect(inscricaoService.buscarPorId(99)).rejects.toThrow('Inscrição não encontrada');
    });
});
