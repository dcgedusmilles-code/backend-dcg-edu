const service = require('../../../services/student_support_office/academic_monitoring_service');
const repo = require('../../../repositories/student_support_office/academic_monitoring_repository');

jest.mock('../../../repositories/student_support_office/academic_monitoring_repository');

describe('AcompanhamentoAcademicoService', () => {
    it('deve listar acompanhamentos', async () => {
        repo.findAll.mockResolvedValue([{ id: 1 }]);
        const result = await service.listar();
        expect(result).toEqual([{ id: 1 }]);
    });

    it('deve lançar erro ao buscar por ID inexistente', async () => {
        repo.findById.mockResolvedValue(null);
        await expect(service.buscarPorId(99)).rejects.toThrow('Acompanhamento não encontrado');
    });
});
