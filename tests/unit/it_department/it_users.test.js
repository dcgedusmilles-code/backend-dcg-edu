const usuarioTIService = require('../../../services/it_department/it_users_service');
const usuarioTIRepository = require('../../../repositories/it_department/it_users_repository');

jest.mock('../../../repositories/it_department/it_users_repository');

describe('UsuarioTIService', () => {
    it('deve criar um usuário de TI com sucesso', async () => {
        const mockData = { nome: 'João TI', email: 'joao@empresa.com' };
        usuarioTIRepository.create.mockResolvedValue(mockData);
        const result = await usuarioTIService.criarUsuario(mockData);
        expect(result).toEqual(mockData);
    });

    it('deve lançar erro ao tentar obter usuário inexistente', async () => {
        usuarioTIRepository.findById.mockResolvedValue(null);
        await expect(usuarioTIService.obterUsuario(1)).rejects.toThrow('Usuário não encontrado');
    });
});
