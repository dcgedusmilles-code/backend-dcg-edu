const cursoService = require('../../../services/training_coordinators/courses_service');
const cursoRepository = require('../../../repositories/training_coordinators/courses_repository');

jest.mock('../../repositories/cursoRepository');

describe('CursoService', () => {
  it('deve criar um curso', async () => {
    const mockCurso = { titulo: 'Node.js Avançado' };
    cursoRepository.create.mockResolvedValue(mockCurso);
    const result = await cursoService.criarCurso(mockCurso);
    expect(result).toEqual(mockCurso);
  });

  it('deve lançar erro se curso não for encontrado', async () => {
    cursoRepository.findById.mockResolvedValue(null);
    await expect(cursoService.obterCursoPorId(99))
      .rejects
      .toThrow('Curso não encontrado');
  });
});
