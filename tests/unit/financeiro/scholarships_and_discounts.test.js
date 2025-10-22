const bolsaDescontoService = require('../../../services/financeiro/scholarships_and_discounts_service');

describe("BolsaDesconto Service - Unit Tests", () => {
    it("deve criar uma bolsa de desconto", async () => {
        const mockData = { aluno_id: 1, tipo: "Mérito", percentual: 50 };
        const result = await bolsaDescontoService.createBolsa(mockData);
        expect(result).toHaveProperty("id");
    });
});
