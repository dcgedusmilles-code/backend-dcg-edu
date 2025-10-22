const request = require('supertest');
const app = require('../../../app');
const { SuporteTI } = require('../../../models');

describe('E2E - SuporteTI', () => {
    beforeAll(async () => {
        await SuporteTI.destroy({ where: {} });
    });

    it('POST /suportes → cria um suporte', async () => {
        const res = await request(app)
            .post('/suportes')
            .send({ tipo: 'Software', descricao: 'Erro no sistema' });
        expect(res.statusCode).toBe(201);
        expect(res.body.tipo).toBe('Software');
    });

    it('GET /suportes → retorna lista de suportes', async () => {
        const res = await request(app).get('/suportes');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
