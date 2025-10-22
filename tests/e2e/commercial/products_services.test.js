const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('ProdutoServico API - E2E', () => {
    it('deve criar e listar produto/serviço', async () => {
        const response = await request(app)
            .post('/produtos-servicos')
            .send({ nome: 'Website', tipo: 'serviço', preco_base: 1500, status: 'ativo' });

        expect(response.status).toBe(201);
        expect(response.body.nome).toBe('Website');

        const list = await request(app).get('/produtos-servicos');
        expect(list.status).toBe(200);
        expect(list.body.length).toBe(1);
    });
});
