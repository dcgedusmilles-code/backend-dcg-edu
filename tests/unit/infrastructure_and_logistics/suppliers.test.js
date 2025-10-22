const fornecedorService = require('../../../services/infrastructure_and_logistics/suppliers_service');
const fornecedorRepository = require('../../../repositories/infrastructure_and_logistics/suppliers_repository');

jest.mock('../../../repositories/infrastructure_and_logistics/suppliers_repository');

describe('FornecedorService', () => {
    it('deve listar todos os fornecedores', async () => {
        fornecedorRepository.findAll.mockResolvedValue([{ id: 1, nome: 'Teste' }]);
        const result = await fornecedorService.listar();
        expect(result).toHaveLength(1);
    });

    it('deve lançar erro se fornecedor não encontrado', async () => {
        fornecedorRepository.findById.mockResolvedValue(null);
        await expect(fornecedorService.obterPorId(999)).rejects.toThrow('Fornecedor não encontrado');
    });
});
