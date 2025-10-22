const request = require('supertest');
const app = require('../../../app'); // Express principal

describe('Eventos API', () => {
    it('POST /eventos -> deve criar evento', async () => {
        const response = await request(app)
            .post('/eventos')
            .send({ nome: 'Conferência', local: 'Luanda', tipo: 'Seminário' });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('GET /eventos -> deve listar eventos', async () => {
        const response = await request(app).get('/eventos');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});
