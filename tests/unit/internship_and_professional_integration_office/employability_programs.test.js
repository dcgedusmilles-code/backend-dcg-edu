const service = require('../../../services/internship_and_professional_integration_office/employability_programs_service');
const repository = require('../../../repositories/internship_and_professional_integration_office/employability_programs_repository');

jest.mock('../../../repositories/internship_and_professional_integration_office/employability_programs_repository');

describe('ProgramaEmpregabilidadeService', () => {
    it('deve listar todos os programas', async () => {
        repository.findAll.mockResolvedValue([{ id: 1, nome: 'Programa Jovem Talento' }]);
        const result = await service.listar();
        expect(result).toEqual([{ id: 1, nome: 'Programa Jovem Talento' }]);
    });

    it('deve lançar erro ao buscar programa inexistente', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.obterPorId(99)).rejects.toThrow('Programa de empregabilidade não encontrado');
    });
});
