const request = require('supertest');
const app = require('../../../app'); // sua instância do Express

describe('Funcionario E2E', () => {
    it('POST /funcionarios -> deve criar um funcionário', async () => {
        const res = await request(app)
            .post('/funcionarios')
            .send({ nome: 'Maria', email: 'maria@test.com' });

        expect(res.statusCode).toEqual(201);
        expect(res.body.nome).toBe('Maria');
    });

    it('GET /funcionarios -> deve listar funcionários', async () => {
        const res = await request(app).get('/funcionarios');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
