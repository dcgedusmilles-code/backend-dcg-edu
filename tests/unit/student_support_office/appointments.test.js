const agendamentoService = require('../../../services/student_support_office/appointments_service');
const agendamentoRepository = require('../../../repositories/student_support_office/appointments_repository');

jest.mock('../../../repositories/student_support_office/appointments_repository');

describe('AgendamentoService', () => {
    it('deve criar um agendamento', async () => {
        const mockData = { id_estudante: 1, id_orientador: 2, status: 'pendente' };
        agendamentoRepository.create.mockResolvedValue(mockData);

        const result = await agendamentoService.create(mockData);
        expect(result).toEqual(mockData);
    });

    it('deve lançar erro se não encontrar agendamento', async () => {
        agendamentoRepository.findById.mockResolvedValue(null);
        await expect(agendamentoService.getById(99)).rejects.toThrow('Agendamento não encontrado');
    });
});
