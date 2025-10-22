const eventoBibliotecaService = require('../../../services/library_resource_center/library_events_service');
const eventoBibliotecaRepository = require('../../../repositories/library_resource_center/library_events_repository');

jest.mock('../../../repositories/library_resource_center/library_events_repository');

describe('EventoBibliotecaService', () => {
    test('deve criar evento com dados válidos', async () => {
        const dados = { titulo: 'Feira do Livro', tipo: 'Cultural', data_inicio: new Date() };
        eventoBibliotecaRepository.create.mockResolvedValue(dados);

        const resultado = await eventoBibliotecaService.criar(dados);
        expect(resultado).toEqual(dados);
    });

    test('deve lançar erro ao criar evento sem campos obrigatórios', async () => {
        await expect(eventoBibliotecaService.criar({})).rejects.toThrow('Campos obrigatórios não informados');
    });
});
