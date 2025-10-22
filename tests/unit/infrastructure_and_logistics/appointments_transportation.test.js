const service = require('../../../services/infrastructure_and_logistics/appointments_transportation_service');
const repository = require('../../../repositories/infrastructure_and_logistics/appointments_transportation_repository');

jest.mock('../../../repositories/infrastructure_and_logistics/appointments_transportation_repository');

describe('AgendamentoTransporteService', () => {
    it('deve listar todos os agendamentos', async () => {
        repository.findAll.mockResolvedValue([{ id: 1, status: 'Pendente' }]);
        const result = await service.listarTodos();
        expect(result).toHaveLength(1);
    });

    it('deve lançar erro ao buscar ID inexistente', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.buscarPorId(999)).rejects.toThrow('Agendamento de transporte não encontrado');
    });
});
