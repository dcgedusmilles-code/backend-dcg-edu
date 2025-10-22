const request = require('supertest');
const app = require('../../../app'); // Express principal

describe('ReclamacaoSugestao API', () => {
    it('POST /api/reclamacoes - deve criar uma nova reclamação', async () => {
        const res = await request(app)
            .post('/api/reclamacoes')
            .send({ tipo: 'Sugestão', descricao: 'Melhorar biblioteca' });

        expect(res.statusCode).toBe(201);
        expect(res.body.tipo).toBe('Sugestão');
    });
});
