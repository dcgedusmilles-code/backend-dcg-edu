const controller = require('../../../controllers/avaliacao_certicacao/assessment_results_controller');
const service = require('../../../services/avaliacao_certicacao/assessment_results_service');

jest.mock('../../../services/avaliacao_certicacao/assessment_results_service');

describe("ResultadoAvaliacaoController", () => {
    let req, res;

    beforeEach(() => {
        req = { params: {}, body: {} };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            send: jest.fn()
        };
    });

    it("index - deve retornar lista de resultados", async () => {
        service.getAll.mockResolvedValue([{ id: 1, nota: 8 }]);
        await controller.index(req, res);
        expect(res.json).toHaveBeenCalledWith([{ id: 1, nota: 8 }]);
    });

    it("show - deve retornar resultado por ID", async () => {
        req.params.id = 1;
        service.getById.mockResolvedValue({ id: 1, nota: 9 });
        await controller.show(req, res);
        expect(res.json).toHaveBeenCalledWith({ id: 1, nota: 9 });
    });

    it("create - deve criar resultado", async () => {
        req.body = { avaliacao_id: 1, participante_id: 2, nota: 7 };
        service.create.mockResolvedValue({ id: 1, ...req.body });
        await controller.create(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ id: 1, ...req.body });
    });

    it("update - deve atualizar resultado", async () => {
        req.params.id = 1;
        req.body = { status: "recuperação" };
        service.update.mockResolvedValue({ id: 1, status: "recuperação" });
        await controller.update(req, res);
        expect(res.json).toHaveBeenCalledWith({ id: 1, status: "recuperação" });
    });

    it("delete - deve remover resultado", async () => {
        req.params.id = 1;
        service.delete.mockResolvedValue(true);
        await controller.delete(req, res);
        expect(res.status).toHaveBeenCalledWith(204);
        expect(res.send).toHaveBeenCalled();
    });

    it("show - deve retornar erro 404 se não encontrado", async () => {
        req.params.id = 99;
        service.getById.mockRejectedValue(new Error("Resultado não encontrado"));
        await controller.show(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: "Resultado não encontrado" });
    });
});
