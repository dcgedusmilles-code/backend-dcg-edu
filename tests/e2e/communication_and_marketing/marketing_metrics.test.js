const request = require('supertest');
const app = require('../../../app'); // Express principal

describe('MetricaMarketing API', () => {
    it('POST /metricas -> deve criar métrica', async () => {
        const response = await request(app)
            .post('/metricas')
            .send({ id_campanha: 1, alcance: 500, interacoes: 50 });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('GET /metricas -> deve listar métricas', async () => {
        const response = await request(app).get('/metricas');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});
