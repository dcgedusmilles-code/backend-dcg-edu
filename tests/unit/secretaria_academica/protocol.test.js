const protocoloService = require('../../../services/secretaria_academica/protocol_service');
const protocoloRepository = require('../../../repositories/secretaria_academica/protocol_repository');

jest.mock('../../../repositories/secretaria_academica/protocol_repository');

describe('ProtocoloService', () => {
    it('deve criar um protocolo com sucesso', async () => {
        const mock = { aluno_id: 1, tipo: 'Reclamação' };
        protocoloRepository.create.mockResolvedValue(mock);

        const result = await protocoloService.create(mock);
        expect(result).toEqual(mock);
    });

    it('deve lançar erro se faltar campos obrigatórios', async () => {
        await expect(protocoloService.create({})).rejects.toThrow('Campos obrigatórios');
    });
});
