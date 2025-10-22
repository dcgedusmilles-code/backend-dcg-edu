const service = require('../../../services/secretaria_academica/academic_documents_service');
const repo = require('../../../repositories/secretaria_academica/academic_documents_repository');

jest.mock('../../../repositories/secretaria_academica/academic_documents_repository');

describe('DocumentoAcademicoService', () => {
    it('deve criar um documento', async () => {
        const mockDoc = { id: 1, tipo: 'Declaração' };
        repo.create.mockResolvedValue(mockDoc);

        const result = await service.create(mockDoc);
        expect(result).toEqual(mockDoc);
    });

    it('deve lançar erro ao buscar ID inexistente', async () => {
        repo.findById.mockResolvedValue(null);
        await expect(service.getById(99)).rejects.toThrow('Documento não encontrado');
    });
});
