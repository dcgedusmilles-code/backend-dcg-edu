const request = require('supertest');
const app = require('../../../app');
const { Reserva } = require('../../../models');

describe('Reserva API', () => {
    beforeAll(async () => {
        await Reserva.sync({ force: true });
    });

    it('deve criar uma reserva', async () => {
        const res = await request(app)
            .post('/reservas')
            .send({ id_exemplar: 1, id_usuario: 1, status: 'ativa' });
        expect(res.statusCode).toBe(201);
        expect(res.body.status).toBe('ativa');
    });

    it('deve listar reservas', async () => {
        const res = await request(app).get('/reservas');
        expect(res.statusCode).toBe(200);
    });
});
