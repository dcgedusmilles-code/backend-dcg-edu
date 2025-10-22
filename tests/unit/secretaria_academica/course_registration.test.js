const service = require('../../../services/secretaria_academica/course_registration_service');
const repository = require('../../../repositories/secretaria_academica/course_registration_repository');

jest.mock('../../../repositories/secretaria_academica/course_registration_repository');

describe('InscricaoDisciplinaService', () => {
    it('deve listar todas as inscrições', async () => {
        repository.findAll.mockResolvedValue([{ id: 1 }]);
        const result = await service.listarTodos();
        expect(result).toEqual([{ id: 1 }]);
    });

    it('deve lançar erro ao buscar uma inscrição inexistente', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.buscarPorId(99)).rejects.toThrow('Inscrição não encontrada');
    });
});
