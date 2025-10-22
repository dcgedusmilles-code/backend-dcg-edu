const campanhaService = require('../../../services/communication_and_marketing/campaigns_service');
const campanhaRepository = require('../../../repositories/communication_and_marketing/campaigns_repository');

jest.mock('../../../repositories/communication_and_marketing/campaigns_repository');

describe('CampanhaService', () => {
    it('deve criar uma campanha', async () => {
        const mockCampanha = { titulo: 'Promoção Outubro', orcamento_estimado: 5000 };
        campanhaRepository.create.mockResolvedValue(mockCampanha);

        const result = await campanhaService.createCampanha(mockCampanha);
        expect(result).toEqual(mockCampanha);
    });
});
