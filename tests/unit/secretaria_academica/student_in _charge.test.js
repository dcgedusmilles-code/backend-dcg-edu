const alunoEncarregadoService = require('../../../services/secretaria_academica/student_in _charge_service');
const alunoEncarregadoRepository = require('../../../repositories/secretaria_academica/student_in _charge_repository');

jest.mock('../../../repositories/secretaria_academica/student_in _charge_repository');

describe('AlunoEncarregadoService', () => {
    it('deve criar um novo vínculo', async () => {
        const data = { aluno_id: 1, encarregado_id: 2, tipo_responsabilidade: 'geral' };
        alunoEncarregadoRepository.create.mockResolvedValue(data);

        const result = await alunoEncarregadoService.createAlunoEncarregado(data);
        expect(result).toEqual(data);
    });
});
