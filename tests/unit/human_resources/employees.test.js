const funcionarioService = require('../../../services/human_resources/employees_service');
const funcionarioRepository = require('../../../repositories/human_resources/employees_repository');

jest.mock('../../../repositories/human_resources/employees_repository');

describe('FuncionarioService Unit', () => {
    it('deve criar um funcionário', async () => {
        const mockFuncionario = { id: 1, nome: 'João' };
        funcionarioRepository.create.mockResolvedValue(mockFuncionario);

        const result = await funcionarioService.createFuncionario({ nome: 'João' });
        expect(result).toEqual(mockFuncionario);
    });
});
