const service = require('../../../services/secretaria_academica/appointment_scheduling_service');
const repository = require('../../../repositories/secretaria_academica/appointment_scheduling_repository');

jest.mock('../../../repositories/secretaria_academica/appointment_scheduling_repository');

describe('AgendamentoAtendimentoService', () => {
    it('deve listar todos os agendamentos', async () => {
        repository.findAll.mockResolvedValue([{ id: 1 }]);
        const result = await service.listarTodos();
        expect(result).toEqual([{ id: 1 }]);
    });

    it('deve lançar erro ao buscar ID inexistente', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.buscarPorId(99)).rejects.toThrow('Agendamento não encontrado');
    });
});
