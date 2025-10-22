const request = require('supertest');
const app = require('../../../app');

describe('E2E Avaliação de Desempenho', () => {
    it('cria e lista avaliações', async () => {
        const create = await request(app)
            .post('/avaliacoes')
            .send({ funcionario_id: 1, periodo: '2025-Q1', nota: 8.5, feedback: 'Bom trabalho', avaliador: 'Gestor' });
        expect(create.statusCode).toBe(201);

        const list = await request(app).get('/avaliacoes');
        expect(list.statusCode).toBe(200);
        expect(Array.isArray(list.body)).toBe(true);
    });
});
