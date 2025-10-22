const estagioService = require('../../../services/internship_and_professional_integration_office/internships_service');
const repository = require('../../../repositories/internship_and_professional_integration_office/internships_repository');

jest.mock('../../../repositories/internship_and_professional_integration_office/internships_repository');

describe('EstagioService', () => {
    it('deve criar um estágio', async () => {
        const mockData = { tipo: 'Profissional' };
        repository.create.mockResolvedValue(mockData);
        const result = await estagioService.criarEstagio(mockData);
        expect(result).toEqual(mockData);
    });

    it('deve lançar erro ao buscar estágio inexistente', async () => {
        repository.findById.mockResolvedValue(null);
        await expect(estagioService.obterEstagio(999)).rejects.toThrow('Estágio não encontrado');
    });
});
