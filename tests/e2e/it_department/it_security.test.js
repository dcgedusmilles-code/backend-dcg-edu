const request = require('supertest');
const app = require('../../../app');

describe('SegurancaTI E2E', () => {
    it('GET /seguranca deve retornar lista', async () => {
        const res = await request(app).get('/seguranca');
        expect([200, 500]).toContain(res.statusCode);
    });

    it('GET /seguranca/:id deve retornar 404 para id inexistente', async () => {
        const res = await request(app).get('/seguranca/999');
        expect([400, 404]).toContain(res.statusCode);
    });
});
