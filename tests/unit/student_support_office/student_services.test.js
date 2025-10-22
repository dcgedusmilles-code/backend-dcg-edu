const service = require('../../../services/student_support_office/student_services_service');
const repository = require('../../../repositories/student_support_office/student_services_repository');

jest.mock('../../../repositories/student_support_office/student_services_repository');

describe('AtendimentoEstudanteService', () => {
    it('deve listar todos os atendimentos', async () => {
        repository.findAll.mockResolvedValue([{ id: 1, tipo: 'Orientação' }]);
        const result = await service.listar();
        expect(result).toHaveLength(1);
    });

    it('deve lançar erro ao buscar por ID inexistente', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.buscarPorId(999)).rejects.toThrow('Atendimento não encontrado.');
    });
});
