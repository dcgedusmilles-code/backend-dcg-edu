const service = require('../../../services/pedagogico/classroom_service');
const repository = require('../../../repositories/pedagogico/classroom_repository');

jest.mock('../../../repositories/pedagogico/classroom_repository');

describe('AulaService', () => {
  it('deve criar uma aula', async () => {
    const mockData = { data: '2025-02-01', conteudo_previsto: 'Introdução à Álgebra' };
    repository.create.mockResolvedValue(mockData);

    const result = await service.criarAula(mockData);
    expect(result).toEqual(mockData);
  });

  it('deve listar as aulas', async () => {
    const mockList = [{ id: 1, conteudo_previsto: 'Geometria' }];
    repository.findAll.mockResolvedValue(mockList);

    const result = await service.listarAulas();
    expect(result).toEqual(mockList);
  });
});
