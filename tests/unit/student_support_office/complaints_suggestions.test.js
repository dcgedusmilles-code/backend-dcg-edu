const reclamacaoSugestaoService = require('../../../services/student_support_office/complaints_suggestions_service');
const repository = require('../../../repositories/student_support_office/complaints_suggestions_repository');

jest.mock('../../../repositories/student_support_office/complaints_suggestions_repository');

describe('ReclamacaoSugestaoService', () => {
  it('deve criar uma nova reclamação/sugestão', async () => {
    const mockData = { tipo: 'Reclamação', descricao: 'Problema no sistema' };
    repository.create.mockResolvedValue(mockData);

    const result = await reclamacaoSugestaoService.criar(mockData);
    expect(result).toEqual(mockData);
    expect(repository.create).toHaveBeenCalled();
  });
});
