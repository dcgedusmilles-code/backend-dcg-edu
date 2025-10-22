const recursoService = require('../../../services/avaliacao_certicacao/assessment_resources_service');
const recursoRepo = require('../../../repositories/avaliacao_certicacao/assessment_resources_repository');

jest.mock('../../../repositories/avaliacao_certicacao/assessment_resources_repository');

describe("RecursoAvaliacaoService", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("deve listar todos os recursos", async () => {
        recursoRepo.findAll.mockResolvedValue([{ id: 1 }]);
        const result = await recursoService.getAll();
        expect(result).toEqual([{ id: 1 }]);
        expect(recursoRepo.findAll).toHaveBeenCalled();
    });

    it("deve buscar recurso por ID", async () => {
        recursoRepo.findById.mockResolvedValue({ id: 1 });
        const result = await recursoService.getById(1);
        expect(result).toEqual({ id: 1 });
        expect(recursoRepo.findById).toHaveBeenCalledWith(1);
    });

    it("deve criar um recurso", async () => {
        const data = { resultado_id: 1, participante_id: 2, justificativa: "Teste" };
        recursoRepo.create.mockResolvedValue({ id: 1, ...data });
        const result = await recursoService.create(data);
        expect(result).toMatchObject(data);
        expect(recursoRepo.create).toHaveBeenCalledWith(data);
    });

    it("deve atualizar um recurso", async () => {
        const data = { justificativa: "Atualizada" };
        recursoRepo.update.mockResolvedValue({ id: 1, ...data });
        const result = await recursoService.update(1, data);
        expect(result).toMatchObject(data);
        expect(recursoRepo.update).toHaveBeenCalledWith(1, data);
    });

    it("deve deletar um recurso", async () => {
        recursoRepo.delete.mockResolvedValue(true);
        const result = await recursoService.delete(1);
        expect(result).toBe(true);
        expect(recursoRepo.delete).toHaveBeenCalledWith(1);
    });
});
