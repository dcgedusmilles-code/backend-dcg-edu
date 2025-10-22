const pesquisaMercadoService = require('../../../services/communication_and_marketing/market_research_service');
const pesquisaMercadoRepository = require('../../../repositories/communication_and_marketing/market_research_repository');

jest.mock('../../../repositories/communication_and_marketing/market_research_repository');

describe('PesquisaMercadoService', () => {
    it('deve criar uma pesquisa de mercado', async () => {
        const mockData = { id: 1, titulo: 'Estudo Consumidor' };
        pesquisaMercadoRepository.create.mockResolvedValue(mockData);

        const result = await pesquisaMercadoService.criarPesquisa(mockData);

        expect(result).toEqual(mockData);
        expect(pesquisaMercadoRepository.create).toHaveBeenCalledWith(mockData);
    });
});
