const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('E2E - Benefícios', () => {
    it('POST /beneficios - deve criar benefício', async () => {
        const res = await request(app)
            .post('/beneficios')
            .send({ nome: 'Vale Alimentação', descricao: 'Cartão refeição mensal' });
        expect(res.statusCode).toBe(201);
        expect(res.body.nome).toBe('Vale Alimentação');
    });

    it('GET /beneficios - deve listar benefícios', async () => {
        const res = await request(app).get('/beneficios');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});
