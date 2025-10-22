const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('Oportunidade API - E2E', () => {
    it('deve criar e listar oportunidade', async () => {
        const response = await request(app)
            .post('/oportunidades')
            .send({ descricao: 'Venda nova', valor_estimado: 5000 });

        expect(response.status).toBe(201);
        expect(response.body.descricao).toBe('Venda nova');

        const list = await request(app).get('/oportunidades');
        expect(list.status).toBe(200);
        expect(list.body.length).toBe(1);
    });
});
