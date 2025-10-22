const request = require('supertest');
const app = require('../../../app'); // seu arquivo principal do Express

describe('E2E Férias', () => {
    it('POST /ferias deve criar um novo registro', async () => {
        const res = await request(app)
            .post('/ferias')
            .send({
                funcionario_id: 1,
                data_inicio: '2025-11-01',
                data_fim: '2025-11-15',
                status: 'Pendente'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body.status).toBe('Pendente');
    });

    it('GET /ferias deve retornar lista', async () => {
        const res = await request(app).get('/ferias');
        expect(res.statusCode).toBe(200);
    });
});
