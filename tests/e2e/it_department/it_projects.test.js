const request = require('supertest');
const app = require('../../../app');

describe('ProjetoTI E2E', () => {
    it('deve retornar lista de projetos (GET /projetos)', async () => {
        const res = await request(app).get('/projetos');
        expect(res.statusCode).toBe(200);
    });

    it('deve retornar 404 ao buscar projeto inexistente', async () => {
        const res = await request(app).get('/projetos/999');
        expect([400, 404]).toContain(res.statusCode);
    });
});
