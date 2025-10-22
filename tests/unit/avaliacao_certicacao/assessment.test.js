const controller = require('../../../controllers/avaliacao_certicacao/assessment_controller');
const service = require('../../../services/avaliacao_certicacao/assessment_service');

jest.mock('../../../services/avaliacao_certicacao/assessment_service');

describe("AvaliacaoController", () => {
  let req, res;

  beforeEach(() => {
    req = { params: {}, body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn()
    };
  });

  it("index - deve retornar lista de avaliações", async () => {
    service.getAll.mockResolvedValue([{ id: 1, titulo: "Prova Final" }]);
    await controller.index(req, res);
    expect(res.json).toHaveBeenCalledWith([{ id: 1, titulo: "Prova Final" }]);
  });

  it("show - deve retornar avaliação por ID", async () => {
    req.params.id = 1;
    service.getById.mockResolvedValue({ id: 1, titulo: "Prova Final" });
    await controller.show(req, res);
    expect(res.json).toHaveBeenCalledWith({ id: 1, titulo: "Prova Final" });
  });

  it("create - deve criar avaliação", async () => {
    req.body = { titulo: "Nova Avaliação" };
    service.create.mockResolvedValue({ id: 1, ...req.body });
    await controller.create(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ id: 1, ...req.body });
  });

  it("update - deve atualizar avaliação", async () => {
    req.params.id = 1;
    req.body = { descricao: "Atualizada" };
    service.update.mockResolvedValue({ id: 1, descricao: "Atualizada" });
    await controller.update(req, res);
    expect(res.json).toHaveBeenCalledWith({ id: 1, descricao: "Atualizada" });
  });

  it("delete - deve remover avaliação", async () => {
    req.params.id = 1;
    service.delete.mockResolvedValue(true);
    await controller.delete(req, res);
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.send).toHaveBeenCalled();
  });
});
