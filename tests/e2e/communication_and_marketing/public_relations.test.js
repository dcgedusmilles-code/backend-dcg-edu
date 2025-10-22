const request = require('supertest');
const app = require('../../../app'); // importa seu express principal

describe('RelacaoPublica API', () => {
    it('POST /api/relacoes-publicas deve criar relação pública', async () => {
        const res = await request(app)
            .post('/api/relacoes-publicas')
            .send({ nome_contato: 'Maria', instituicao: 'ONG X' });

        expect(res.statusCode).toBe(201);
        expect(res.body.nome_contato).toBe('Maria');
    });

    it('GET /api/relacoes-publicas deve listar relações públicas', async () => {
        const res = await request(app).get('/api/relacoes-publicas');
        expect(res.statusCode).toBe(200);
    });
});
