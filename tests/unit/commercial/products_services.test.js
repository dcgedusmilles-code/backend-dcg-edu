const produtoServicoService = require('../../../services/commercial/products_services_service');
const produtoServicoRepository = require('../../../repositories/commercial/products_services_repository');

jest.mock('../../../repositories/commercial/products_services_repository');

describe('ProdutoServicoService - Unit Tests', () => {
    it('deve criar um produto/serviço', async () => {
        const mockProduto = { nome: 'Hospedagem Cloud', tipo: 'serviço', preco_base: 100 };
        produtoServicoRepository.create.mockResolvedValue(mockProduto);

        const result = await produtoServicoService.createProdutoServico(mockProduto);

        expect(result).toEqual(mockProduto);
        expect(produtoServicoRepository.create).toHaveBeenCalledWith(mockProduto);
    });
});
