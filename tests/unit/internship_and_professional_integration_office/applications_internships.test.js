const service = require('../../../services/internship_and_professional_integration_office/applications_internships_service');
const repo = require('../../../repositories/internship_and_professional_integration_office/applications_internships_repository');

jest.mock('../../../repositories/internship_and_professional_integration_office/applications_internships_repository');

describe('CandidaturaEstagioService', () => {
    it('deve listar candidaturas', async () => {
        repo.findAll.mockResolvedValue([{ id: 1 }]);
        const result = await service.listar();
        expect(result).toHaveLength(1);
    });

    it('deve lançar erro se candidatura não encontrada', async () => {
        repo.findById.mockResolvedValue(null);
        await expect(service.obterPorId(999)).rejects.toThrow('Candidatura não encontrada');
    });
});
