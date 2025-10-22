const request = require('supertest');
const app = require('../../../app'); // seu app Express

describe('ContaPagar API', () => {
    it('POST /api/contas-pagar deve criar conta', async () => {
        const res = await request(app)
            .post('/api/contas-pagar')
            .send({ descricao: 'Internet', valor: 200 });

        expect(res.statusCode).toBe(201);
        expect(res.body.descricao).toBe('Internet');
    });

    it('GET /api/contas-pagar deve listar contas', async () => {
        const res = await request(app).get('/api/contas-pagar');
        expect(res.statusCode).toBe(200);
    });
});
