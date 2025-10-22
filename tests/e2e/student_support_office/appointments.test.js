const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('Agendamento E2E', () => {
    it('POST /agendamentos -> cria um novo agendamento', async () => {
        const res = await request(app)
            .post('/agendamentos')
            .send({ id_estudante: 1, id_orientador: 1, motivo: 'Orientação', status: 'pendente' });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
    });

    it('GET /agendamentos -> retorna lista de agendamentos', async () => {
        const res = await request(app).get('/agendamentos');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
