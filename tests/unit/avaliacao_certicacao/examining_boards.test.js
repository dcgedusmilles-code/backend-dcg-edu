const bancaService = require('../../../services/avaliacao_certicacao/examining_boards_service');
const bancaRepo = require('../../../repositories/avaliacao_certicacao/examining_boards_repository');

jest.mock('../../../repositories/avaliacao_certicacao/examining_boards_repository');

describe('BancaExaminadoraService', () => {
    it('deve listar bancas', async () => {
        bancaRepo.findAll.mockResolvedValue([{ id: 1, funcao: 'Presidente' }]);
        const result = await bancaService.listar();
        expect(result).toHaveLength(1);
    });

    it('deve criar uma banca', async () => {
        bancaRepo.create.mockResolvedValue({ id: 1, funcao: 'Presidente' });
        const result = await bancaService.criar({ funcao: 'Presidente' });
        expect(result.funcao).toBe('Presidente');
    });
});
