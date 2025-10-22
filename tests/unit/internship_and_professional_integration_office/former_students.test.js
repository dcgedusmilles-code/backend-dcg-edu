const ExAlunoService = require('../../../services/internship_and_professional_integration_office/former_students_service');
const ExAlunoRepository = require('../../../repositories/internship_and_professional_integration_office/former_students_repository');

jest.mock('../../../repositories/internship_and_professional_integration_office/former_students_repository');

describe('ExAlunoService', () => {
    it('deve criar um novo ex-aluno', async () => {
        const data = { id_estudante: 1, empresa_atual: 'Tech Corp' };
        ExAlunoRepository.create.mockResolvedValue(data);

        const result = await ExAlunoService.create(data);
        expect(result).toEqual(data);
    });

    it('deve lançar erro se faltar campos obrigatórios', async () => {
        await expect(ExAlunoService.create({})).rejects.toThrow();
    });
});
