const parceriaService = require('../../../services/communication_and_marketing/partnerships_service');
const parceriaRepository = require('../../../repositories/communication_and_marketing/partnerships_repository');

jest.mock('../../../repositories/communication_and_marketing/partnerships_repository');

describe('ParceriaService', () => {
    it('deve criar uma parceria', async () => {
        const parceriaData = { nome_parceiro: 'Empresa X', tipo: 'Estratégica' };
        parceriaRepository.create.mockResolvedValue(parceriaData);

        const result = await parceriaService.create(parceriaData);
        expect(result).toEqual(parceriaData);
    });

    it('deve retornar todas as parcerias', async () => {
        parceriaRepository.findAll.mockResolvedValue([{ id: 1 }]);
        const result = await parceriaService.getAll();
        expect(result).toHaveLength(1);
    });
});
