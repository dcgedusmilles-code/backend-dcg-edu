const eventoApoioService = require('../../../services/student_support_office/events_support_service');
const repository = require('../../../repositories/student_support_office/events_support_repository');

jest.mock('../../../repositories/student_support_office/events_support_repository');

describe('EventoApoioService', () => {
    it('deve criar um novo evento de apoio', async () => {
        const mockData = { nome_evento: 'Feira de Carreiras', tipo: 'Feira' };
        repository.create.mockResolvedValue(mockData);

        const result = await eventoApoioService.criar(mockData);

        expect(result).toEqual(mockData);
        expect(repository.create).toHaveBeenCalled();
    });

    it('deve lançar erro se o evento não for encontrado', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(eventoApoioService.obterPorId(99))
            .rejects
            .toThrow('Evento de apoio não encontrado');
    });
});
