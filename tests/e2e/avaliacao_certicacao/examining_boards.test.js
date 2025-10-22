const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

describe('BancaExaminadora E2E', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    it('POST /bancas -> deve criar uma banca', async () => {
        const res = await request(app)
            .post('/bancas')
            .send({ avaliacao_id: 1, instrutor_id: 1, funcao: 'Presidente' });
        expect(res.statusCode).toBe(201);
        expect(res.body.funcao).toBe('Presidente');
    });

    it('GET /bancas -> deve listar bancas', async () => {
        const res = await request(app).get('/bancas');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });
});
