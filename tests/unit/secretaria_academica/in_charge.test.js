const encarregadoService = require('../../../services/secretaria_academica/in_charge_service');
const encarregadoRepository = require('../../../repositories/secretaria_academica/in_charge_repository');

jest.mock('../../../repositories/secretaria_academica/in_charge_repository');

describe('EncarregadoService', () => {
    it('deve criar um encarregado com sucesso', async () => {
        const mock = { nome: 'Maria Silva' };
        encarregadoRepository.create.mockResolvedValue(mock);
        const result = await encarregadoService.create(mock);
        expect(result).toEqual(mock);
    });

    it('deve lançar erro se o nome estiver ausente', async () => {
        await expect(encarregadoService.create({})).rejects.toThrow('O campo nome é obrigatório.');
    });
});
