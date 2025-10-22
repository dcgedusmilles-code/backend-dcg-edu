const request = require('supertest');
const app = require('../../../app'); // seu arquivo principal express

describe('Inadimplencia E2E', () => {
    it('deve criar uma inadimplência', async () => {
        const res = await request(app)
            .post('/inadimplencias')
            .send({
                aluno_id: 1,
                mensalidade_id: 2,
                dias_atraso: 5,
                valor_em_aberto: 300,
                status_negociacao: "em aberto"
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
    });

    it('deve listar inadimplências', async () => {
        const res = await request(app).get('/inadimplencias');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
