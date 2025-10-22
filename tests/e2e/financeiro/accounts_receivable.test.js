const request = require('supertest');
const app = require('../../../app'); // sua instância express

describe('E2E - Contas a Receber', () => {
    it('deve criar e listar uma conta a receber', async () => {
        const novaConta = {
            descricao: "Serviço prestado",
            valor: 1500,
            data_vencimento: "2025-10-20",
            origem: "Cliente XYZ",
            status: "pendente"
        };

        const resCreate = await request(app).post('/contas-receber').send(novaConta);
        expect(resCreate.statusCode).toBe(201);

        const resList = await request(app).get('/contas-receber');
        expect(resList.statusCode).toBe(200);
        expect(resList.body.length).toBeGreaterThan(0);
    });
});
