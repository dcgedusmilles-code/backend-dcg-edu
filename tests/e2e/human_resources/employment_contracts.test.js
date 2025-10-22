const request = require('supertest');
const app = require('../../../app'); // sua instância do Express

describe('ContratoTrabalho E2E', () => {
    it('POST /contratos -> deve criar um contrato', async () => {
        const res = await request(app)
            .post('/contratos')
            .send({ funcionario_id: 1, tipo: 'CLT', salario_inicial: 2500 });

        expect(res.statusCode).toEqual(201);
        expect(res.body.tipo).toBe('CLT');
    });

    it('GET /contratos -> deve listar contratos', async () => {
        const res = await request(app).get('/contratos');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
