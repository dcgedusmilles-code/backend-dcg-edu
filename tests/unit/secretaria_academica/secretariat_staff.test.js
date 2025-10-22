const funcionarioSecretariaService = require('../../../services/secretaria_academica/secretariat_staff_service');
const funcionarioSecretariaRepository = require('../../../repositories/secretaria_academica/secretariat_staff_repository');

jest.mock('../../../repositories/secretaria_academica/secretariat_staff_repository');

describe('FuncionarioSecretariaService', () => {
    it('deve criar um vínculo com sucesso', async () => {
        const mock = { secretaria_id: 1, funcionario_id: 2 };
        funcionarioSecretariaRepository.create.mockResolvedValue(mock);
        const result = await funcionarioSecretariaService.create(mock);
        expect(result).toEqual(mock);
    });

    it('deve lançar erro se faltar campos obrigatórios', async () => {
        await expect(funcionarioSecretariaService.create({})).rejects.toThrow(
            'Os campos secretaria_id e funcionario_id são obrigatórios.'
        );
    });
});
