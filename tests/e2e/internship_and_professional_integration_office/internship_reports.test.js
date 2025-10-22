const request = require('supertest');
const app = require('../../../app'); // app principal Express

describe('E2E - RelatorioEstagio', () => {
    it('POST /api/relatorios deve criar relatório', async () => {
        const res = await request(app)
            .post('/api/relatorios')
            .send({ titulo: 'Relatório E2E', descricao: 'Descrição', status: 'Enviado' });
        expect(res.statusCode).toBe(201);
        expect(res.body.titulo).toBe('Relatório E2E');
    });

    it('GET /api/relatorios deve retornar lista', async () => {
        const res = await request(app).get('/api/relatorios');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
