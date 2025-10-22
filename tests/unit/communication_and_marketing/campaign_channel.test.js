const campanhaCanalService = require('../../../services/communication_and_marketing/campaign_channel_service');
const campanhaCanalRepository = require('../../../repositories/communication_and_marketing/campaign_channel_repository');

jest.mock('../../../repositories/communication_and_marketing/campaign_channel_repository');

describe('CampanhaCanalService - Unit Tests', () => {
    it('deve criar um vínculo de campanha com canal', async () => {
        const mockData = { id_campanha: 1, id_canal: 2, custo: 500, resultado_medido: 'positiva' };
        campanhaCanalRepository.create.mockResolvedValue(mockData);

        const result = await campanhaCanalService.createCampanhaCanal(mockData);

        expect(result).toEqual(mockData);
        expect(campanhaCanalRepository.create).toHaveBeenCalledWith(mockData);
    });
});

