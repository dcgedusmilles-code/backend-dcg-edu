const request = require('supertest');
const app = require('../../../app'); // seu app express

describe('Rotas de Avaliação de Estágio', () => {
    it('GET /avaliacoes - deve retornar status 200', async () => {
        const res = await request(app).get('/avaliacoes');
        expect(res.statusCode).toBe(200);
    });

    it('POST /avaliacoes - deve criar uma nova avaliação', async () => {
        const res = await request(app)
            .post('/avaliacoes')
            .send({
                id_estagio: 1,
                avaliador: 'João',
                desempenho: 'Bom',
                data_avaliacao: new Date()
            });
        expect(res.statusCode).toBe(201);
    });
});
