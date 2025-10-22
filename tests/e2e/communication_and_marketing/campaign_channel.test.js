const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('CampanhaCanal API - E2E', () => {
    it('deve criar e listar uma campanha-canal', async () => {
        const response = await request(app)
            .post('/campanha-canais')
            .send({ id_campanha: 1, id_canal: 1, custo: 1200, resultado_medido: 'bom' });

        expect(response.status).toBe(201);
        expect(response.body.custo).toBe(1200);

        const list = await request(app).get('/campanha-canais');
        expect(list.status).toBe(200);
        expect(list.body.length).toBe(1);
    });
});
