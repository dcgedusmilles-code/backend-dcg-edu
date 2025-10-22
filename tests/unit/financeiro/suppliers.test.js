const fornecedorService = require('../../../services/financeiro/suppliers_service');

describe("Fornecedor Service - Unit Tests", () => {
    it("deve criar um fornecedor", async () => {
        const mockData = { nome: "Fornecedor A", cnpj: "12345678000199", email: "a@teste.com" };
        const result = await fornecedorService.createFornecedor(mockData);
        expect(result).toHaveProperty("id");
        expect(result.nome).toBe("Fornecedor A");
    });
});
