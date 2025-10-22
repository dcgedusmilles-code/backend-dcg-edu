const segurancaTIService = require('../../../services/it_department/it_security_service');
const segurancaTIRepository = require('../../../repositories/it_department/it_security_repository');

jest.mock('../../../repositories/it_department/it_security_repository');

describe('SegurancaTIService', () => {
    test('criar registro com sucesso', async () => {
        const data = { tipo: 'Firewall', descricao: 'Configuração de firewall corporativo' };
        segurancaTIRepository.create.mockResolvedValue(data);
        const result = await segurancaTIService.criar(data);
        expect(result).toEqual(data);
    });

    test('buscar registro inexistente deve lançar erro', async () => {
        segurancaTIRepository.findById.mockResolvedValue(null);
        await expect(segurancaTIService.buscarPorId(99))
            .rejects.toThrow('Registro não encontrado');
    });
});
