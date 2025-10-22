const advertenciaService = require('../../../services/human_resources/disciplinary_warnings_service');
const advertenciaRepository = require('../../../repositories/human_resources/disciplinary_warnings_repository');

jest.mock('../../../repositories/human_resources/disciplinary_warnings_repository');

describe('AdvertenciaDisciplinaService', () => {
    it('deve criar uma advertência', async () => {
        const data = { tipo: 'Grave', motivo: 'Indisciplina' };
        advertenciaRepository.create.mockResolvedValue(data);

        const result = await advertenciaService.create(data);
        expect(result).toEqual(data);
    });
});
