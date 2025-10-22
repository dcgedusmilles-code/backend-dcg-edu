const multaService = require('../../../services/library_resource_center/fines_service');
const multaRepository = require('../../../repositories/library_resource_center/fines_repository');

jest.mock('../../../repositories/library_resource_center/fines_repository');

describe('MultaService', () => {
    test('deve criar multa com dados válidos', async () => {
        const dados = { valor: 100, id_usuario: 1, id_emprestimo: 1 };
        multaRepository.create.mockResolvedValue(dados);

        const resultado = await multaService.criar(dados);
        expect(resultado).toEqual(dados);
    });

    test('deve lançar erro ao criar multa sem dados obrigatórios', async () => {
        await expect(multaService.criar({})).rejects.toThrow('Campos obrigatórios não informados');
    });
});
