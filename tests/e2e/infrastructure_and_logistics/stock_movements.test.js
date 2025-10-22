const request = require('supertest');
const app = require('../../../app');
const { MovimentacaoEstoque } = require('../../../models');

describe('Rotas de Movimentação de Estoque (E2E)', () => {
    beforeAll(async () => {
        await MovimentacaoEstoque.sync({ force: true });
    });

    it('POST /movimentacoes → cria movimentação', async () => {
        const res = await request(app)
            .post('/movimentacoes')
            .send({ tipo: 'entrada', quantidade: 50, destino: 'Armazém Central' });
        expect(res.statusCode).toBe(201);
        expect(res.body.tipo).toBe('entrada');
    });

    it('GET /movimentacoes → lista movimentações', async () => {
        const res = await request(app).get('/movimentacoes');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
