const request = require('supertest');
const app = require('../../../app'); // Express principal

describe('E2E - ParticipacaoTreinamento', () => {
    it('deve criar uma participação', async () => {
        const data = { treinamento_id: 1, funcionario_id: 1, status: 'concluido', nota_avaliacao: 9 };

        const res = await request(app).post('/participacoes-treinamentos').send(data);
        expect(res.statusCode).toBe(201);
        expect(res.body.status).toBe('concluido');
    });

    it('deve listar participações', async () => {
        const res = await request(app).get('/participacoes-treinamentos');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
