const reservaService = require('../../../services/library_resource_center/reservations_service');
const reservaRepository = require('../../../repositories/library_resource_center/reservations_repository');

jest.mock('./../../repositories/library_resource_center/reservations_repository');

describe('ReservaService', () => {
    it('deve listar reservas', async () => {
        reservaRepository.findAll.mockResolvedValue([{ id: 1 }]);
        const result = await reservaService.listar();
        expect(result).toEqual([{ id: 1 }]);
    });

    it('deve criar uma reserva', async () => {
        const nova = { id_exemplar: 1, id_usuario: 2 };
        reservaRepository.create.mockResolvedValue(nova);
        const result = await reservaService.criar(nova);
        expect(result).toEqual(nova);
    });
});
