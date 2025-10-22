const suporteTIService = require('../../../services/it_department/it_support_service');
const suporteTIRepository = require('../../../repositories/it_department/it_support_repository');

jest.mock('../../../repositories/it_department/it_support_repository');

describe('SuporteTIService', () => {
    it('deve criar um suporte com sucesso', async () => {
        const mockData = { tipo: 'Hardware', descricao: 'Erro no servidor' };
        suporteTIRepository.create.mockResolvedValue(mockData);
        const result = await suporteTIService.criarSuporte(mockData);
        expect(result).toEqual(mockData);
    });

    it('deve lançar erro ao tentar obter suporte inexistente', async () => {
        suporteTIRepository.findById.mockResolvedValue(null);
        await expect(suporteTIService.obterSuporte(1)).rejects.toThrow('Suporte não encontrado');
    });
});
