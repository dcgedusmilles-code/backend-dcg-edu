const professorService = require('../../../services/pedagogico/teachers_service');
const professorRepository = require('../../../repositories/pedagogico/teachers_repository');

jest.mock('../../../repositories/pedagogico/teachers_repository');

describe('ProfessorService - Unit', () => {
    it('deve criar um professor', async () => {
        const mockProfessor = { id: 1, nome: 'João Jamba' };
        professorRepository.create.mockResolvedValue(mockProfessor);

        const result = await professorService.criarProfessor(mockProfessor);
        expect(result).toEqual(mockProfessor);
    });

    it('deve lançar erro ao tentar obter professor inexistente', async () => {
        professorRepository.findById.mockResolvedValue(null);
        await expect(professorService.obterProfessor(999))
            .rejects.toThrow('Professor não encontrado');
    });
});
