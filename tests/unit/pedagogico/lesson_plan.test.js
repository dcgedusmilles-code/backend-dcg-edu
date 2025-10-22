const planoDeAulaService = require('../../../services/pedagogico/lesson_plan_service');
const planoDeAulaRepository = require('../../../repositories/pedagogico/lesson_plan_repository');

jest.mock('../../../repositories/pedagogico/lesson_plan_repository');

describe('PlanoDeAulaService - Unit', () => {
  it('deve criar um plano de aula', async () => {
    const mockPlano = { id: 1, titulo: 'Plano 1' };
    planoDeAulaRepository.create.mockResolvedValue(mockPlano);

    const result = await planoDeAulaService.criarPlano(mockPlano);
    expect(result).toEqual(mockPlano);
  });

  it('deve lançar erro ao tentar obter plano inexistente', async () => {
    planoDeAulaRepository.findById.mockResolvedValue(null);
    await expect(planoDeAulaService.obterPlano(999))
      .rejects.toThrow('Plano de aula não encontrado');
  });
});
