const projetoTIService = require('../../../services/it_department/it_projects_service');
const projetoTIRepository = require('../../../repositories/it_department/it_projects_repository');

jest.mock('../../../repositories/it_department/it_projects_repository');

describe('ProjetoTIService', () => {
    test('criar projeto com sucesso', async () => {
        const data = { nome: 'Sistema Escolar' };
        projetoTIRepository.create.mockResolvedValue(data);
        const result = await projetoTIService.createProjeto(data);
        expect(result).toEqual(data);
    });

    test('buscar projeto inexistente deve lançar erro', async () => {
        projetoTIRepository.findById.mockResolvedValue(null);
        await expect(projetoTIService.buscarPorId(999))
            .rejects.toThrow('Projeto não encontrado');
    });
});
