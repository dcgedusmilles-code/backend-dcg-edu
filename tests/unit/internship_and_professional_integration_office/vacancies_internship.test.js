const vagaEstagioService = require('../../../services/internship_and_professional_integration_office/vacancies_internship_service');
const vagaEstagioRepository = require('../../../repositories/internship_and_professional_integration_office/vacancies_internship_repository');

jest.mock('../../../repositories/internship_and_professional_integration_office/vacancies_internship_repository');

describe('VagaEstagioService', () => {
    it('deve criar uma nova vaga', async () => {
        const mockData = { titulo_vaga: 'Estágio em TI' };
        vagaEstagioRepository.create.mockResolvedValue(mockData);
        const result = await vagaEstagioService.criarVaga(mockData);
        expect(result).toEqual(mockData);
    });

    it('deve lançar erro ao buscar vaga inexistente', async () => {
        vagaEstagioRepository.findById.mockResolvedValue(null);
        await expect(vagaEstagioService.obterVagaPorId(999))
            .rejects.toThrow('Vaga não encontrada');
    });
});
