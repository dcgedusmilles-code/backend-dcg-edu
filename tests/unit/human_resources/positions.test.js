const service = require('../../../services/human_resources/positions_service');
const repository = require('../../../repositories/human_resources/positions_repository');

jest.mock('../../../repositories/human_resources/positions_repository');

describe('CargoService', () => {
    it('deve criar um cargo', async () => {
        const mock = { nome: 'Analista', descricao: 'Analisa dados', salario_base: 2000 };
        repository.create.mockResolvedValue(mock);

        const result = await service.criarCargo(mock);
        expect(result).toEqual(mock);
    });

    it('deve lançar erro ao buscar cargo inexistente', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(service.buscarPorId(99)).rejects.toThrow('Cargo não encontrado');
    });
});
