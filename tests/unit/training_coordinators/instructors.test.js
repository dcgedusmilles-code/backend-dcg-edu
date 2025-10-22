const instrutorService = require('../../../services/training_coordinators/instructors_service');
const instrutorRepository = require('../../../repositories/training_coordinators/instructors_repository');

jest.mock('../../../repositories/training_coordinators/instructors_repository');

describe('InstrutorService', () => {
    it('deve criar um instrutor', async () => {
        const mockInstrutor = { nome: 'João Silva', email: 'joao@example.com' };
        instrutorRepository.create.mockResolvedValue(mockInstrutor);
        const result = await instrutorService.criarInstrutor(mockInstrutor);
        expect(result).toEqual(mockInstrutor);
    });

    it('deve lançar erro se instrutor não for encontrado', async () => {
        instrutorRepository.findById.mockResolvedValue(null);
        await expect(instrutorService.obterInstrutorPorId(99))
            .rejects
            .toThrow('Instrutor não encontrado');
    });
});
