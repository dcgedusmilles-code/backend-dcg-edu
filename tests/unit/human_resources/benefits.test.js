const beneficioService = require('../../../services/human_resources/benefits_service');
const beneficioRepository = require('../../../repositories/human_resources/benefits_repository');

jest.mock('../../../repositories/human_resources/benefits_repository');

describe('BeneficioService', () => {
    it('deve criar um benefício', async () => {
        const data = { nome: 'Plano de Saúde', descricao: 'Saúde completa' };
        beneficioRepository.create.mockResolvedValue(data);

        const result = await beneficioService.create(data);
        expect(result).toEqual(data);
    });
});
