const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('Rotas de Relação Empresa (E2E)', () => {
    it('POST /relacoes deve criar uma relação', async () => {
        const res = await request(app)
            .post('/relacoes')
            .send({ id_empresa: 1, tipo: 'Fornecedor', status: 'Ativo' });
        expect(res.statusCode).toBe(201);
        expect(res.body.tipo).toBe('Fornecedor');
    });

    it('GET /relacoes deve listar relações', async () => {
        const res = await request(app).get('/relacoes');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });
});
