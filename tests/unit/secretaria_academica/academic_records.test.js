const service = require('../../../services/secretaria_academica/academic_records_service');
const repo = require('../../../repositories/secretaria_academica/academic_records_repository');

jest.mock('../../../repositories/secretaria_academica/academic_records_repository');

describe('HistoricoAcademicoService', () => {
    it('deve criar um histórico', async () => {
        const mock = { id: 1, aluno_id: 1, nota_final: 17 };
        repo.create.mockResolvedValue(mock);

        const result = await service.create(mock);
        expect(result).toEqual(mock);
    });

    it('deve lançar erro se histórico não encontrado', async () => {
        repo.findById.mockResolvedValue(null);
        await expect(service.getById(999)).rejects.toThrow('Histórico acadêmico não encontrado');
    });
});
