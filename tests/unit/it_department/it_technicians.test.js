const tecnicoTIService = require('../../../services/it_department/it_technicians_service');
const tecnicoTIRepository = require('../../../repositories/it_department/it_technicians_repository');

jest.mock('../../../repositories/it_department/it_technicians_repository');

describe('TecnicoTIService', () => {
    it('deve criar um técnico com sucesso', async () => {
        const mockData = { nome: 'João Silva', email: 'joao@empresa.com' };
        tecnicoTIRepository.create.mockResolvedValue(mockData);
        const result = await tecnicoTIService.criarTecnico(mockData);
        expect(result).toEqual(mockData);
    });

    it('deve lançar erro ao tentar obter técnico inexistente', async () => {
        tecnicoTIRepository.findById.mockResolvedValue(null);
        await expect(tecnicoTIService.obterTecnico(1)).rejects.toThrow('Técnico não encontrado');
    });
});
