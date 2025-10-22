const service = require('../../../services/student_support_office/advisors_service');
const repo = require('../../../repositories/student_support_office/advisors_repository');

jest.mock('../../../repositories/student_support_office/advisors_repository');

describe('OrientadorService', () => {
    it('deve listar orientadores', async () => {
        repo.findAll.mockResolvedValue([{ id: 1 }]);
        const result = await service.listar();
        expect(result).toEqual([{ id: 1 }]);
    });

    it('deve lançar erro se orientador não for encontrado', async () => {
        repo.findById.mockResolvedValue(null);
        await expect(service.buscarPorId(999)).rejects.toThrow('Orientador não encontrado');
    });
});
