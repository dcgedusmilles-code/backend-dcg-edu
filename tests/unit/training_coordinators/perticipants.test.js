const participanteService = require('../../../services/training_coordinators/perticipants_service');
const participanteRepository = require('../../../repositories/training_coordinators/perticipants_repository');

jest.mock('../../../repositories/training_coordinators/perticipants_repository');

describe('ParticipanteService', () => {
    it('deve criar um participante', async () => {
        const mock = { nome: 'João', email: 'joao@test.com' };
        participanteRepository.create.mockResolvedValue(mock);
        const result = await participanteService.criar(mock);
        expect(result).toEqual(mock);
    });

    it('deve lançar erro ao buscar participante inexistente', async () => {
        participanteRepository.findById.mockResolvedValue(null);
        await expect(participanteService.obterPorId(999))
            .rejects
            .toThrow('Participante não encontrado');
    });
});
