const request = require('supertest');
const app = require('../../../app'); // seu arquivo principal Express

describe('Inscricao E2E', () => {
    it('GET /inscricoes deve retornar 200', async () => {
        const res = await request(app).get('/inscricoes');
        expect(res.statusCode).toBe(200);
    });

    it('POST /inscricoes deve criar uma inscrição', async () => {
        const res = await request(app)
            .post('/inscricoes')
            .send({
                participante_id: 1,
                turma_id: 1,
                data_inscricao: new Date(),
                status: 'ativo'
            });
        expect(res.statusCode).toBe(201);
    });
});
