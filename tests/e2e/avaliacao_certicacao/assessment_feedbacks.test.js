const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('E2E - Feedback Avaliação', () => {
    it('POST /api/feedbacks - cria feedback', async () => {
        const res = await request(app)
            .post('/api/feedbacks')
            .send({ avaliacao_id: 1, participante_id: 1, comentario: 'Muito bom', nota: 5 });
        expect(res.status).toBe(201);
        expect(res.body.comentario).toBe('Muito bom');
    });
});
