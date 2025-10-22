const request = require('supertest');
const app = require('../../../app'); // sua instância do express
const { sequelize } = require('../../../models');

describe('CriterioAvaliacao - E2E', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    it('POST /criterios - deve criar critério', async () => {
        const response = await request(app)
            .post('/criterios')
            .send({
                avaliacao_id: 1,
                descricao: 'Trabalho prático',
                peso: 0.4,
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.descricao).toBe('Trabalho prático');
    });

    it('GET /criterios - deve listar critérios', async () => {
        const response = await request(app).get('/criterios');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});
