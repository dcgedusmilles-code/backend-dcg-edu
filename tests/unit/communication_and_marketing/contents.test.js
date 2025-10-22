const conteudoService = require('../../../services/communication_and_marketing/contents_service');
const conteudoRepository = require('../../../repositories/communication_and_marketing/contents_repository');

jest.mock('.../../../repositories/communication_and_marketing/contents_repository');

describe('ConteudoService', () => {
    it('deve criar um conteúdo', async () => {
        const mockConteudo = { titulo: 'Artigo de Marketing', tipo: 'Blog' };
        conteudoRepository.create.mockResolvedValue(mockConteudo);

        const result = await conteudoService.criarConteudo(mockConteudo);
        expect(result).toEqual(mockConteudo);
    });
});
