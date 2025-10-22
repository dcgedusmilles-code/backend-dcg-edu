const alunoService = require('../../../services/secretaria_academica/students_service');
const alunoRepository = require('../../../repositories/secretaria_academica/students_repository');

jest.mock('../../../repositories/secretaria_academica/students_repository');

describe('AlunoService', () => {
    it('deve criar um aluno', async () => {
        const data = { nome: 'Carlos Silva', email: 'carlos@exemplo.com' };
        alunoRepository.create.mockResolvedValue(data);

        const result = await alunoService.createAluno(data);
        expect(result).toEqual(data);
    });

    it('deve listar todos os alunos', async () => {
        const alunos = [{ nome: 'Ana' }, { nome: 'Pedro' }];
        alunoRepository.findAll.mockResolvedValue(alunos);

        const result = await alunoService.getAllAlunos();
        expect(result.length).toBe(2);
    });
});
