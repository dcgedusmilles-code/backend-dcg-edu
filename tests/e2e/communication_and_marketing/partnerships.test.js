const request = require('supertest');
const app = require('../../../app'); // seu arquivo principal express

describe('Parceria API', () => {
    it('POST /api/parcerias deve criar parceria', async () => {
        const res = await request(app)
            .post('/api/parcerias')
            .send({ nome_parceiro: 'Empresa Y', tipo: 'Tecnológica' });

        expect(res.statusCode).toBe(201);
        expect(res.body.nome_parceiro).toBe('Empresa Y');
    });

    it('GET /api/parcerias deve listar parcerias', async () => {
        const res = await request(app).get('/api/parcerias');
        expect(res.statusCode).toBe(200);
    });
});
