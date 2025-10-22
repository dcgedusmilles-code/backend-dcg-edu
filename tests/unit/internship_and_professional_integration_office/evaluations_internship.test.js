const AvaliacaoEstagioService = require('../../../services/internship_and_professional_integration_office/evaluations_internship_service');
const AvaliacaoEstagioRepository = require('../../../repositories/internship_and_professional_integration_office/evaluations_internship_repository');

jest.mock('../../../repositories/internship_and_professional_integration_office/evaluations_internship_repository');

describe('AvaliacaoEstagioService', () => {
    it('deve criar uma nova avaliação', async () => {
        const data = { id_estagio: 1, avaliador: 'Carlos', desempenho: 'Excelente' };
        AvaliacaoEstagioRepository.create.mockResolvedValue(data);

        const result = await AvaliacaoEstagioService.create(data);
        expect(result).toEqual(data);
    });

    it('deve lançar erro se faltar campos obrigatórios', async () => {
        await expect(AvaliacaoEstagioService.create({})).rejects.toThrow();
    });
});
