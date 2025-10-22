const request = require('supertest');
const app = require('../../../app'); // sua instância express

describe('E2E - CaixaMovimento', () => {
    it('deve criar e listar movimentações de caixa', async () => {
        const novoMovimento = {
            tipo: "entrada",
            descricao: "Venda serviço",
            valor: 3000,
            data_movimento: "2025-10-02",
            responsavel: "Carlos Silva"
        };

        const resCreate = await request(app).post('/caixa-movimentos').send(novoMovimento);
        expect(resCreate.statusCode).toBe(201);

        const resList = await request(app).get('/caixa-movimentos');
        expect(resList.statusCode).toBe(200);
        expect(resList.body.length).toBeGreaterThan(0);
    });
});
