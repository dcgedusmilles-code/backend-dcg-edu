const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

describe('MetaComercial API', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    it('POST /metas - deve criar uma meta', async () => {
        const res = await request(app)
            .post('/metas')
            .send({ descricao: 'Meta E2E', periodo: '2025-Q2', valor_meta: 20000 });
        expect(res.statusCode).toBe(201);
        expect(res.body.descricao).toBe('Meta E2E');
    });

    it('GET /metas - deve listar metas', async () => {
        const res = await request(app).get('/metas');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });
});
