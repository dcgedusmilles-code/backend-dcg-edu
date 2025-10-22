const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

describe('Feedback E2E', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    it('POST /feedbacks -> deve criar um feedback', async () => {
        const res = await request(app)
            .post('/feedbacks')
            .send({
                avaliacao_id: 1,
                participante_id: 1,
                curso_id: 1,
                instrutor_id: 1,
                comentario: 'Muito bom',
                nota: 5,
                data: new Date()
            });
        expect(res.statusCode).toBe(201);
        expect(res.body.nota).toBe(5);
    });

    it('GET /feedbacks -> deve listar feedbacks', async () => {
        const res = await request(app).get('/feedbacks');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });
});
