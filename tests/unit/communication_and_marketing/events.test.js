const eventoService = require('../../../services/communication_and_marketing/events_service');
const eventoRepository = require('../../../repositories/communication_and_marketing/events_repository');

jest.mock('../../../repositories/communication_and_marketing/events_repository');

describe('EventoService', () => {
    it('deve criar um evento', async () => {
        const mockEvento = { id: 1, nome: 'Workshop' };
        eventoRepository.create.mockResolvedValue(mockEvento);

        const result = await eventoService.createEvento(mockEvento);

        expect(result).toEqual(mockEvento);
        expect(eventoRepository.create).toHaveBeenCalledWith(mockEvento);
    });
});
