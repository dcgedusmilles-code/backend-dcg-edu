const disciplinaService = require('../../../services/pedagogico/disciplines_service');
const disciplinaRepository = require('../../../repositories/pedagogico/disciplines_repository');

jest.mock('../../../repositories/pedagogico/disciplines_repository');

describe('DisciplinaService - Unit', () => {
    it('deve criar uma nova disciplina', async () => {
        const mockDisciplina = { id: 1, nome: 'Matemática' };
        disciplinaRepository.create.mockResolvedValue(mockDisciplina);
        const result = await disciplinaService.criarDisciplina(mockDisciplina);
        expect(result).toEqual(mockDisciplina);
    });

    it('deve lançar erro se disciplina não existir ao obter', async () => {
        disciplinaRepository.findById.mockResolvedValue(null);
        await expect(disciplinaService.obterDisciplina(999))
            .rejects.toThrow('Disciplina não encontrada');
    });
});
