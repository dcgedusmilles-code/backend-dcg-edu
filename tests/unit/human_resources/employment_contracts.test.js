const contratoTrabalhoService = require('../../../services/human_resources/employment_contracts_service');
const contratoTrabalhoRepository = require('../../../repositories/human_resources/employment_contracts_repository');

jest.mock('../../../repositories/human_resources/employment_contracts_repository');

describe('ContratoTrabalhoService Unit', () => {
    it('deve criar um contrato', async () => {
        const mockContrato = { id: 1, tipo: 'CLT' };
        contratoTrabalhoRepository.create.mockResolvedValue(mockContrato);

        const result = await contratoTrabalhoService.createContrato({ tipo: 'CLT' });
        expect(result).toEqual(mockContrato);
    });
});

