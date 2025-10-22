const canalService = require('../../../services/communication_and_marketing/channels_disclosure_service');
const canalRepository = require('../../../repositories/communication_and_marketing/channels_disclosure_repository');

jest.mock('../../../repositories/communication_and_marketing/channels_disclosure_repository');

describe('CanalDivulgacaoService', () => {
    it('deve criar um canal', async () => {
        const mockCanal = { nome: 'Facebook Ads', tipo: 'Online' };
        canalRepository.create.mockResolvedValue(mockCanal);

        const result = await canalService.criarCanal(mockCanal);
        expect(result).toEqual(mockCanal);
    });
});
