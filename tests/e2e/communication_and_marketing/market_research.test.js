const request = require('supertest');
const app = require('../../../app'); // express principal

describe('Pesquisa de Mercado API', () => {
    it('POST /pesquisas -> deve criar pesquisa', async () => {
        const response = await request(app)
            .post('/pesquisas')
            .send({ titulo: 'Estudo Mercado Angola', objetivo: 'Analisar preferências' });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('GET /pesquisas -> deve listar pesquisas', async () => {
        const response = await request(app).get('/pesquisas');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});
