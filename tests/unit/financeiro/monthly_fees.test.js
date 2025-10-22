const mensalidadeService = require('../../../services/financeiro/monthly_fees_service');

describe("Mensalidade Service - Unit Tests", () => {
    it("deve criar uma mensalidade", async () => {
        const mockData = { aluno_id: 1, curso_id: 1, valor: 500 };
        const result = await mensalidadeService.createMensalidade(mockData);
        expect(result).toHaveProperty("id");
    });
});
