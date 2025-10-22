const service = require('../../../services/internship_and_professional_integration_office/business_relationships_service');
const repository = require('../../../repositories/internship_and_professional_integration_office/business_relationships_repository');

jest.mock('../../../repositories/internship_and_professional_integration_office/business_relationships_repository');

describe('RelacaoEmpresaService', () => {
    it('deve listar todas as relações', async () => {
        repository.findAll.mockResolvedValue([{ id: 1, tipo: 'Parceiro' }]);
        const result = await service.listar();
        expect(result).toEqual([{ id: 1, tipo: 'Parceiro' }]);
    });

    it('deve lançar erro ao buscar por id inexistente', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.obterPorId(999)).rejects.toThrow('Relação não encontrada');
    });
});
