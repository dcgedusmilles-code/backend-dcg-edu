const service = require('../../../services/student_support_office/student_benefits_service');
const repository = require('../../../repositories/student_support_office/student_benefits_repository');

jest.mock('../../../repositories/student_support_office/student_benefits_repository');

describe('BeneficioEstudantilService', () => {
    it('deve listar todos os benefícios', async () => {
        repository.findAll.mockResolvedValue([{ id: 1, tipo: 'Bolsa Alimentação' }]);
        const result = await service.listar();
        expect(result).toHaveLength(1);
    });

    it('deve lançar erro ao buscar por ID inexistente', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.buscarPorId(999)).rejects.toThrow('Benefício não encontrado.');
    });
});
