const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('Venda API - E2E', () => {
    it('deve criar e listar venda', async () => {
        const response = await request(app)
            .post('/vendas')
            .send({
                id_cliente: 1,
                id_produto: 1,
                quantidade: 2,
                valor_unitario: 50,
                valor_total: 100,
                forma_pagamento: 'Cartão',
                data_venda: new Date()
            });

        expect(response.status).toBe(201);
        expect(response.body.valor_total).toBe(100);

        const list = await request(app).get('/vendas');
        expect(list.status).toBe(200);
        expect(list.body.length).toBe(1);
    });
});
