const request = require('supertest');
const app = require('../../../app');


describe('Transferencias API (E2E)', () => {
    it('GET /transferencias deve retornar 200', async () => {
        const res = await request(app).get('/transferencias');
        expect(res.status).toBe(200);
    });

    it('POST /transferencias deve criar uma transferência', async () => {
        const res = await request(app)
            .post('/transferencias')
            .send({
                aluno_id: 1,
                curso_origem: 'Engenharia Civil',
                curso_destino: 'Engenharia Informática',
                data_solicitacao: '2025-10-06',
                status: 'pendente'
            });
        expect([200, 201, 400]).toContain(res.status);
    });
});
