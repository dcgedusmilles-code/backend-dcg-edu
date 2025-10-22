const request = require('supertest');
const app = require('../../../app'); // arquivo principal express

describe('RelatorioFinanceiro E2E', () => {
    it('deve criar um relatório financeiro', async () => {
        const res = await request(app)
            .post('/relatorios')
            .send({
                tipo: "Demonstração",
                periodo_inicio: "2025-01-01",
                periodo_fim: "2025-12-31",
                responsavel: "Carlos"
            });

        expect(res.statusCode).toBe(201);
        expect(res.body.tipo).toBe("Demonstração");
    });

    it('deve listar relatórios financeiros', async () => {
        const res = await request(app).get('/relatorios');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
