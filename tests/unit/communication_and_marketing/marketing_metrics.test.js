const metricaMarketingService = require('../../../services/communication_and_marketing/marketing_metrics_service');
const metricaMarketingRepository = require('../../../repositories/communication_and_marketing/marketing_metrics_repository');

jest.mock('../../../repositories/communication_and_marketing/marketing_metrics_repository');

describe('MetricaMarketingService', () => {
    it('deve criar uma métrica de marketing', async () => {
        const mockData = { id: 1, alcance: 1000 };
        metricaMarketingRepository.create.mockResolvedValue(mockData);

        const result = await metricaMarketingService.criarMetrica(mockData);

        expect(result).toEqual(mockData);
        expect(metricaMarketingRepository.create).toHaveBeenCalledWith(mockData);
    });
});
