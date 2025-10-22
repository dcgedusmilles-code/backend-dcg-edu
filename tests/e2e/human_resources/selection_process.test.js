const request = require('supertest');
const app = require('../../../app');

describe('E2E Processo Seletivo', () => {
    it('deve criar e listar processos seletivos', async () => {
        const novo = {
            vaga_id: 1,
            candidato_id: 2,
            status: 'Aprovado',
            data_etapa: '2025-10-01'
        };

        const create = await request(app).post('/processos').send(novo);
        expect(create.statusCode).toBe(201);

        const list = await request(app).get('/processos');
        expect(list.statusCode).toBe(200);
        expect(Array.isArray(list.body)).toBe(true);
    });
});
