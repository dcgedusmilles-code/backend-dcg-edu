const request = require('supertest');
const app = require('../../../app');

describe('RelatorioComercial API', () => {
    it('POST /relatorios - deve criar um relatório', async () => {
        const res = await request(app)
            .post('/relatorios')
            .send({ periodo: '2025-Q3', total_vendas: 120000 });
        expect(res.statusCode).toBe(201);
        expect(res.body.periodo).toBe('2025-Q3');
    });

    it('GET /relatorios - deve listar relatórios', async () => {
        const res = await request(app).get('/relatorios');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });
});
