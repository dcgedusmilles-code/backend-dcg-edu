const request = require('supertest');
const app = require('../../../app');

describe('E2E Cargo', () => {
    it('deve criar e listar cargos', async () => {
        const novo = {
            nome: 'Desenvolvedor',
            descricao: 'Cria sistemas internos',
            departamento_id: 1,
            salario_base: 3500
        };

        const create = await request(app).post('/cargos').send(novo);
        expect(create.statusCode).toBe(201);

        const list = await request(app).get('/cargos');
        expect(list.statusCode).toBe(200);
        expect(Array.isArray(list.body)).toBe(true);
    });
});
