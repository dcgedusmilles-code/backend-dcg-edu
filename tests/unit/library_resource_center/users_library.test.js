const service = require('../../../services/library_resource_center/users_library_service');
const repository = require('../../../repositories/library_resource_center/users_library_repository');

jest.mock('../../../repositories/library_resource_center/users_library_repository');

describe('UsuarioBibliotecaService', () => {
    it('deve criar um usuário', async () => {
        const mockData = { nome: 'João', tipo: 'Estudante' };
        repository.create.mockResolvedValue(mockData);

        const result = await service.createUsuario(mockData);
        expect(result).toEqual(mockData);
    });

    it('deve listar usuários', async () => {
        const mockUsers = [{ nome: 'Maria' }];
        repository.findAll.mockResolvedValue(mockUsers);

        const result = await service.listarUsuarios();
        expect(result.length).toBe(1);
    });
});
