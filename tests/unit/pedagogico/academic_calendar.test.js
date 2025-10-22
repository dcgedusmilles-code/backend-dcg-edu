const service = require('../../../services/pedagogico/academic_calendar_service');
const repository = require('../../../repositories/pedagogico/academic_calendar_repository');

jest.mock('../../../repositories/pedagogico/academic_calendar_repository');

describe('CalendarioAcademicoService', () => {
  it('deve criar um calendário', async () => {
    const mockData = { ano_letivo: 2025, semestre: 1 };
    repository.create.mockResolvedValue(mockData);

    const result = await service.criarCalendario(mockData);
    expect(result).toEqual(mockData);
  });

  it('deve listar calendários', async () => {
    const mockList = [{ ano_letivo: 2025 }];
    repository.findAll.mockResolvedValue(mockList);

    const result = await service.listarCalendarios();
    expect(result).toEqual(mockList);
  });
});
