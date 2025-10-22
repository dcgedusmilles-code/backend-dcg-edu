const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

describe('PropostaComercial API', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    it('POST /propostas - deve criar uma proposta', async () => {
        const res = await request(app)
            .post('/propostas')
            .send({ descricao: 'Proposta E2E', valor_proposta: 12000, status: 'Enviada' });
        expect(res.statusCode).toBe(201);
        expect(res.body.descricao).toBe('Proposta E2E');
    });

    it('GET /propostas - deve listar propostas', async () => {
        const res = await request(app).get('/propostas');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });
});
