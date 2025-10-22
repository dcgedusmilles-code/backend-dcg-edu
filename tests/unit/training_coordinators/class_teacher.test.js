const turmaService = require('../../../services/training_coordinators/class_teacher_service');
const turmaRepository = require('../../../repositories/training_coordinators/class_teacher_repository');

jest.mock('../../../repositories/training_coordinators/class_teacher_repository');

describe('TurmaService', () => {
  it('deve criar uma nova turma', async () => {
    const dados = { nome: 'Turma A', ano: 2025, semestre: 1 };
    turmaRepository.create.mockResolvedValue(dados);
    const result = await turmaService.criar(dados);
    expect(result).toEqual(dados);
  });

  it('deve lançar erro ao criar turma sem nome', async () => {
    await expect(turmaService.criar({})).rejects.toThrow('Campos obrigatórios ausentes');
  });
});
