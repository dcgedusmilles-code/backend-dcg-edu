const request = require('supertest');
const app = require('../../../app');
const { EstoqueLogistico } = require('../../../models');

describe('Rotas de Estoque Logístico (E2E)', () => {
    beforeAll(async () => {
        await EstoqueLogistico.sync({ force: true });
    });

    it('POST /estoque-logistico → cria item', async () => {
        const res = await request(app)
            .post('/estoque-logistico')
            .send({ nome_item: 'Tijolo', quantidade_disponivel: 500 });
        expect(res.statusCode).toBe(201);
        expect(res.body.nome_item).toBe('Tijolo');
    });

    it('GET /estoque-logistico → lista itens', async () => {
        const res = await request(app).get('/estoque-logistico');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
