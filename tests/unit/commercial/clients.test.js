const clienteService = require('../../../services/commercial/clients_service');
const clienteRepository = require('../../../repositories/commercial/clients_repository');

jest.mock('../../../repositories/commercial/clients_repository');

describe('ClienteService', () => {
    it('deve listar clientes', async () => {
        clienteRepository.findAll.mockResolvedValue([{ id: 1, nome: 'João' }]);
        const result = await clienteService.listar();
        expect(result).toHaveLength(1);
    });

    it('deve criar cliente', async () => {
        clienteRepository.create.mockResolvedValue({ id: 1, nome: 'João' });
        const result = await clienteService.criar({ nome: 'João' });
        expect(result.nome).toBe('João');
    });
});
