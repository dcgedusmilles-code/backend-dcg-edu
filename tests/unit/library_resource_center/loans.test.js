const emprestimoService = require('../../../services/library_resource_center/loans_service');
const emprestimoRepository = require('../../../repositories/library_resource_center/loans_repository');

jest.mock('../../../repositories/library_resource_center/loans_repository');

describe('EmprestimoService', () => {
    test('deve criar um empréstimo válido', async () => {
        const dados = {
            id_exemplar: 1,
            id_usuario: 2,
            data_emprestimo: new Date(),
            data_prevista_devolucao: new Date(),
        };

        emprestimoRepository.create.mockResolvedValue(dados);
        const resultado = await emprestimoService.criar(dados);

        expect(resultado).toEqual(dados);
    });

    test('deve lançar erro se campos obrigatórios não forem informados', async () => {
        await expect(emprestimoService.criar({})).rejects.toThrow('Campos obrigatórios não informados');
    });
});
