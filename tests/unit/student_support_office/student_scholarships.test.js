const service = require('../../../services/student_support_office/student_scholarships_service');
const repository = require('../../../repositories/student_support_office/student_scholarships_repository');

jest.mock('../../../repositories/student_support_office/student_scholarships_repository');

describe('BolsaEstudantilService', () => {
    it('deve listar todas as bolsas', async () => {
        repository.findAll.mockResolvedValue([{ id: 1, nome_bolsa: 'Bolsa Mérito' }]);
        const result = await service.listar();
        expect(result).toHaveLength(1);
    });

    it('deve lançar erro ao buscar por ID inexistente', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.buscarPorId(999)).rejects.toThrow('Bolsa não encontrada.');
    });
});
