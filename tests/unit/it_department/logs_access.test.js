const logAcessoService = require('../../../services/it_department/logs_access_service');
const logAcessoRepository = require('../../../repositories/it_department/logs_access_repository');

jest.mock('../../../repositories/it_department/logs_access_repository');

describe('LogAcessoService', () => {
    it('deve listar todos os logs', async () => {
        logAcessoRepository.findAll.mockResolvedValue([{ id: 1 }]);
        const result = await logAcessoService.listarLogs();
        expect(result).toHaveLength(1);
    });

    it('deve lançar erro ao não encontrar log', async () => {
        logAcessoRepository.findById.mockResolvedValue(null);
        await expect(logAcessoService.obterLog(999)).rejects.toThrow('Log não encontrado');
    });
});
