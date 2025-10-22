const coordenadorService = require('../../../services/training_coordinators/coordinator_service');
const coordenadorRepository = require('../../../repositories/training_coordinators/coordinator_repository');

jest.mock('../../../repositories/training_coordinators/coordinator_repository');

describe('CoordenadorService', () => {
  it('deve criar um coordenador com sucesso', async () => {
    const dados = { nome: 'João', email: 'joao@teste.com' };
    coordenadorRepository.create.mockResolvedValue(dados);
    const result = await coordenadorService.criar(dados);
    expect(result).toEqual(dados);
  });

  it('deve lançar erro se nome e email não forem informados', async () => {
    await expect(coordenadorService.criar({})).rejects.toThrow('Campos obrigatórios ausentes');
  });
});
