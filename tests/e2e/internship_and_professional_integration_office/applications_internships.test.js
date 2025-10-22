const request = require('supertest');
const app = require('../../../app');

describe('CandidaturaEstagio E2E', () => {
    it('deve criar e listar candidatura', async () => {
        const nova = {
            id_vaga: 1,
            id_estudante: 2,
            data_candidatura: '2025-10-06',
            status: 'pendente'
        };

        await request(app).post('/candidaturas').send(nova).expect(201);
        const lista = await request(app).get('/candidaturas').expect(200);
        expect(lista.body.length).toBeGreaterThan(0);
    });
});
