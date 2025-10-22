const sessaoEstudoService = require('../../../services/library_resource_center/study_session_service');
const sessaoEstudoRepository = require('../../../repositories/library_resource_center/study_session_repository');

jest.mock('../../../repositories/library_resource_center/study_session_repository');

describe('SessaoEstudoService', () => {
    it('deve listar sessões', async () => {
        sessaoEstudoRepository.findAll.mockResolvedValue([{ id: 1 }]);
        const result = await sessaoEstudoService.listar();
        expect(result).toEqual([{ id: 1 }]);
    });

    it('deve criar uma sessão', async () => {
        const nova = { id_usuario: 1, local: 'Sala A' };
        sessaoEstudoRepository.create.mockResolvedValue(nova);
        const result = await sessaoEstudoService.criar(nova);
        expect(result).toEqual(nova);
    });
});
